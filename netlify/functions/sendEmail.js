// import { Resend } from "resend";

// const ALLOWED_ORIGINS = new Set([
//   "https://com-sec.io",
//   "http://localhost:8888",
//   "http://localhost:5173",
// ]);

// const buildCorsHeaders = (origin) => {
//   const headers = {
//     "Access-Control-Allow-Methods": "POST, OPTIONS",
//     "Access-Control-Allow-Headers": "Content-Type",
//   };
//   if (origin && ALLOWED_ORIGINS.has(origin)) {
//     headers["Access-Control-Allow-Origin"] = origin;
//   }
//   return headers;
// };

// const parseBody = (event) => {
//   try {
//     return JSON.parse(event.body || "{}");
//   } catch {
//     return {};
//   }
// };

// const validate = (data) => {
//   const errors = [];
//   if (!data.name || String(data.name).trim() === "") errors.push("name is required");
//   if (!data.email || String(data.email).trim() === "") errors.push("email is required");
//   if (!data.message || String(data.message).trim() === "") errors.push("message is required");
//   const emailRe = /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]{2,})$/i;
//   if (data.email && !emailRe.test(String(data.email))) errors.push("email is invalid");
//   return errors;
// };

// const toHtmlTable = (payload) => {
//   const rows = [
//     ["Name", payload.name || "-"],
//     ["Email", payload.email || "-"],
//     ["Phone", payload.phone || "-"],
//     ["Company", payload.company || "-"],
//     ["Service", payload.service || "-"],
//     ["Budget", payload.budget || "-"],
//     ["Message", (payload.message || "-").replace(/\n/g, "<br/>")],
//   ]
//     .map(
//       ([label, value]) =>
//         `<tr><td style="padding:8px;border:1px solid #eee;font-weight:600">${label}</td><td style="padding:8px;border:1px solid #eee">${value}</td></tr>`
//     )
//     .join("");

//   return `
//     <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111">
//       <h2 style="margin:0 0 12px">New Website Inquiry</h2>
//       <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #eee">${rows}</table>
//     </div>
//   `;
// };

// export async function handler(event) {
//   // const origin = event.headers?.origin || event.headers?.Origin;
//   const origin = (event.headers && (event.headers.origin || event.headers.Origin)) || "";

//   const headers = buildCorsHeaders(origin);

//   if (event.httpMethod === "OPTIONS") {
//     return { statusCode: 204, headers, body: "" };
//   }

//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       headers,
//       body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
//     };
//   }

//   const data = parseBody(event);
//   const errors = validate(data);
//   if (errors.length) {
//     return {
//       statusCode: 400,
//       headers,
//       body: JSON.stringify({ ok: false, error: errors.join(", ") }),
//     };
//   }

//   const apiKey = process.env.RESEND_API_KEY;
//   if (!apiKey) {
//     return {
//       statusCode: 500,
//       headers,
//       body: JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }),
//     };
//   }

//   const resend = new Resend(apiKey);
//   const subject = data.service
//     ? `New Inquiry — ${data.service}`
//     : "Contact Form Submission";
//   const html = toHtmlTable(data);

//   const send = async (from) =>
//     resend.emails.send({
//       from,
//       to: "team@com-sec.io",
//       subject,
//       html,
//       reply_to: data.email,
//     });

//   try {
//     await send("no-reply@com-sec.io");
//   } catch (err) {
//     const msg = String(err?.message || err || "").toLowerCase();
//     const needsFallback = msg.includes("not verified") || msg.includes("domain");
//     if (!needsFallback) {
//       return {
//         statusCode: 500,
//         headers,
//         body: JSON.stringify({ ok: false, error: String(err?.message || err) }),
//       };
//     }
//     try {
//       await send("onboarding@resend.dev");
//     } catch (err2) {
//       return {
//         statusCode: 500,
//         headers,
//         body: JSON.stringify({ ok: false, error: String(err2?.message || err2) }),
//       };
//     }
//   }

//   return {
//     statusCode: 200,
//     headers,
//     body: JSON.stringify({ ok: true }),
//   };
// }
import { Resend } from "resend";

const ALLOWED_ORIGINS = new Set([
  "https://com-sec.io",
  "http://localhost:8888",
  "http://localhost:5173",
]);

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

const validate = (data) => {
  const errors = [];
  if (!data.name || String(data.name).trim() === "") errors.push("name is required");
  if (!data.email || String(data.email).trim() === "") errors.push("email is required");
  if (!data.message || String(data.message).trim() === "") errors.push("message is required");
  const emailRe = /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]{2,})$/i;
  if (data.email && !emailRe.test(String(data.email))) errors.push("email is invalid");
  return errors;
};

const toHtmlTable = (payload) => {
  const rows = [
    ["Name", payload.name || "-"],
    ["Email", payload.email || "-"],
    ["Phone", payload.phone || "-"],
    ["Company", payload.company || "-"],
    ["Service", payload.service || "-"],
    ["Budget", payload.budget || "-"],
    ["Message", (payload.message || "-").replace(/\n/g, "<br/>")],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #eee;font-weight:600">${label}</td><td style="padding:8px;border:1px solid #eee">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111">
      <h2 style="margin:0 0 12px">New Website Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #eee">${rows}</table>
    </div>
  `;
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
  const errors = validate(data);
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
  const subject = data.service
    ? `New Inquiry — ${data.service}`
    : "Contact Form Submission";
  const html = toHtmlTable(data);

  const send = async (from) =>
    resend.emails.send({
      from,
      to: "team@com-sec.io",
      subject,
      html,
      reply_to: data.email,
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
