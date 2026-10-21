import { Resend } from "resend";

const ALLOWED_ORIGINS = new Set([
  "https://com-sec.io",
  "http://localhost:8888",
  "http://localhost:5173",
]);

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const SERVICE_OPTIONS = [
  "SOC 2 Readiness",
  "Penetration Testing",
  "Cloud Security",
  "Security Policy Audits",
  "Risk Management",
  "Compliance Consulting",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
];

const EMAIL_RE = /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]{2,})$/i;

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

const buildCorsHeaders = (origin) => {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
};

const parseBody = (event) => {
  try {
    return JSON.parse(event.body || "{}");
  } catch {
    return {};
  }
};

const normalize = (data) => ({
  name: String(data.name ?? "").trim(),
  email: String(data.email ?? "").trim(),
  phone: String(data.phone ?? "").trim(),
  company: String(data.company ?? "").trim(),
  service: String(data.service ?? "").trim(),
  budget: String(data.budget ?? "").trim(),
  message: String(data.message ?? "").trim(),
});

const validate = (fields) => {
  const errors = [];
  if (!fields.name) errors.push("name is required");
  if (fields.name.length > 200) errors.push("name is too long");
  if (!fields.email) errors.push("email is required");
  else if (fields.email.length > 254 || !EMAIL_RE.test(fields.email)) errors.push("email is invalid");
  if (!fields.company) errors.push("company is required");
  if (fields.company.length > 200) errors.push("company is too long");
  if (fields.phone.length > 40) errors.push("phone is too long");
  if (fields.service && !SERVICE_OPTIONS.includes(fields.service)) errors.push("service is invalid");
  if (fields.budget && !BUDGET_OPTIONS.includes(fields.budget)) errors.push("budget is invalid");
  if (!fields.message) errors.push("message is required");
  if (fields.message.length > 5000) errors.push("message is too long");
  return errors;
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

const toHtmlTable = (fields) => {
  const rows = [
    ["Name", fields.name || "-"],
    ["Email", fields.email || "-"],
    ["Phone", fields.phone || "-"],
    ["Company", fields.company || "-"],
    ["Service", fields.service || "-"],
    ["Budget", fields.budget || "-"],
    ["Message", escapeHtml(fields.message || "-").replace(/\n/g, "<br/>")],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #eee;font-weight:600">${label}</td><td style="padding:8px;border:1px solid #eee">${label === "Message" ? value : escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111">
      <h2 style="margin:0 0 12px">New Website Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #eee">${rows}</table>
    </div>
  `;
};

const verifyTurnstile = async (token, ip) => {
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  if (ip) body.set("remoteip", ip);

  const response = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
  const result = await response.json();
  return result.success === true;
};

export async function handler(event) {
  const origin =
    (event.headers && (event.headers.origin || event.headers.Origin)) || "";
  const headers = buildCorsHeaders(origin);

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  const data = parseBody(event);

  if (data.website) {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  const turnstileToken = String(data.turnstileToken ?? "");
  if (!turnstileToken) {
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ ok: false, error: "Verification required" }),
    };
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: "Missing TURNSTILE_SECRET_KEY" }),
    };
  }

  let verified;
  try {
    verified = await verifyTurnstile(
      turnstileToken,
      event.headers && event.headers["x-nf-client-connection-ip"]
    );
  } catch (err) {
    console.error("Turnstile verification unavailable:", err);
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({ ok: false, error: "Verification unavailable" }),
    };
  }

  if (!verified) {
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ ok: false, error: "Verification failed" }),
    };
  }

  const fields = normalize(data);
  const errors = validate(fields);
  if (errors.length) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ ok: false, error: errors.join(", ") }),
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }),
    };
  }

  const resend = new Resend(apiKey);
  const subject = fields.service
    ? `New Inquiry — ${fields.service}`
    : "Contact Form Submission";
  const html = toHtmlTable(fields);

  const send = async (from) =>
    resend.emails.send({
      from,
      to: "team@com-sec.io",
      subject,
      html,
      reply_to: fields.email,
    });

  try {
    await send("Com-Sec <team@com-sec.io>");
  } catch (err) {
    const msg = String((err && err.message) || err || "").toLowerCase();
    const needsFallback = msg.includes("not verified") || msg.includes("domain");
    if (!needsFallback) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ ok: false, error: String((err && err.message) || err) }),
      };
    }
    try {
      await send("onboarding@resend.dev");
    } catch (err2) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ ok: false, error: String((err2 && err2.message) || err2) }),
      };
    }
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ ok: true }),
  };
}
