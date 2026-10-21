import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }));

vi.mock("resend", () => ({
  Resend: vi.fn(() => ({ emails: { send: sendMock } })),
}));

import { handler } from "../netlify/functions/sendEmail.js";

const validBody = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+1 555 0100",
  company: "Acme",
  service: "SOC 2 Readiness",
  budget: "$10,000 - $25,000",
  message: "We need help with <b>SOC 2</b> & audits",
  turnstileToken: "token-123",
  website: "",
};

const makeEvent = (body: Record<string, unknown>) => ({
  httpMethod: "POST",
  headers: { origin: "https://com-sec.io", "x-nf-client-connection-ip": "203.0.113.5" },
  body: JSON.stringify(body),
});

const siteverify = (success: boolean) =>
  new Response(JSON.stringify({ success }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

describe("sendEmail handler", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.TURNSTILE_SECRET_KEY = "secret_test";
    sendMock.mockReset();
    sendMock.mockResolvedValue({ data: { id: "email_1" }, error: null });
    fetchMock = vi.fn().mockResolvedValue(siteverify(true));
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("verifies the token with Siteverify and sends the inquiry with escaped HTML", async () => {
    const res = await handler(makeEvent(validBody));

    expect(res.statusCode).toBe(200);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
    expect(init.body.get("secret")).toBe("secret_test");
    expect(init.body.get("response")).toBe("token-123");
    expect(init.body.get("remoteip")).toBe("203.0.113.5");

    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "Com-Sec <team@com-sec.io>",
        to: "team@com-sec.io",
        subject: "New Inquiry — SOC 2 Readiness",
        reply_to: "jane@example.com",
        html: expect.stringContaining("&lt;b&gt;SOC 2&lt;/b&gt; &amp; audits"),
      })
    );
  });

  it("rejects a request without a Turnstile token before any network call", async () => {
    const res = await handler(makeEvent({ ...validBody, turnstileToken: "" }));

    expect(res.statusCode).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects a token that Siteverify does not accept", async () => {
    fetchMock.mockResolvedValue(siteverify(false));

    const res = await handler(makeEvent(validBody));

    expect(res.statusCode).toBe(403);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("fails closed when Siteverify is unreachable", async () => {
    fetchMock.mockRejectedValue(new Error("network down"));

    const res = await handler(makeEvent(validBody));

    expect(res.statusCode).toBe(503);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("silently drops submissions that fill the honeypot", async () => {
    const res = await handler(makeEvent({ ...validBody, website: "http://spam.example" }));

    expect(res.statusCode).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects invalid input after verification", async () => {
    const res = await handler(makeEvent({ ...validBody, email: "not-an-email" }));

    expect(res.statusCode).toBe(400);
    expect(res.body).toContain("email is invalid");
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects service and budget values outside the form options", async () => {
    const res = await handler(makeEvent({ ...validBody, service: "<script>", budget: "Free" }));

    expect(res.statusCode).toBe(400);
    expect(res.body).toContain("service is invalid");
    expect(res.body).toContain("budget is invalid");
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("fails closed when the Turnstile secret is not configured", async () => {
    delete process.env.TURNSTILE_SECRET_KEY;

    const res = await handler(makeEvent(validBody));

    expect(res.statusCode).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMock).not.toHaveBeenCalled();
  });
});
