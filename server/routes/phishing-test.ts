import express from "express";

const router = express.Router();

// Lazy load Resend to avoid initialization during import
let resend: any = null;
let isEmailConfigured = false;

const initializeResend = async () => {
  try {
    if (!resend && process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      resend = new Resend(process.env.RESEND_API_KEY);
      isEmailConfigured = true;
      console.log("✅ Resend initialized successfully in phishing-test.ts");
      console.log("🔑 API Key present:", !!process.env.RESEND_API_KEY);
    } else {
      console.log("⚠️  RESEND_API_KEY not found in phishing-test.ts");
      console.log("📝 Available env vars:", Object.keys(process.env).filter(key => key.includes('RESEND')));
    }
  } catch (error) {
    console.error("❌ Failed to initialize Resend in phishing-test.ts:", error);
  }
};

// POST endpoint for phishing test form submission
router.post("/submit-phishing-test", async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      companyName,
      numberOfEmployees,
      emailService,
      emailList,
      message,
      timestamp,
    } = req.body;

    // Basic validation
    if (
      !email ||
      !firstName ||
      !lastName ||
      !companyName ||
      !numberOfEmployees ||
      !emailService ||
      !emailList
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Prepare email content for Farbod
    const emailText = `New Free Phishing Test Request

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Company: ${companyName}
- Number of Employees: ${numberOfEmployees}
- Email Service: ${emailService}

Email List for Testing:
${emailList}

${message ? `Additional Message:\n${message}` : ""}

Submitted at: ${timestamp}

Please follow up with this phishing test request promptly.
`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #ea580c); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🚨 New Phishing Test Request</h1>
        </div>

        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td><td style="padding: 8px 0; color: #6b7280;">${companyName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Employees:</td><td style="padding: 8px 0; color: #6b7280;">${numberOfEmployees}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email Service:</td><td style="padding: 8px 0; color: #6b7280;">${emailService}</td></tr>
          </table>

          <h3 style="color: #1f2937; margin-top: 30px;">Employee Email List for Testing:</h3>
          <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #d1d5db; font-family: monospace; white-space: pre-line; color: #374151;">${emailList}</div>

          ${
            message
              ? `
            <h3 style="color: #1f2937; margin-top: 30px;">Additional Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #d1d5db; color: #374151;">${message}</div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding: 15px; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">⏰ Submitted: ${new Date(timestamp).toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;">Please follow up with this phishing test request promptly.</p>
          </div>
        </div>
      </div>
    `;

    // Initialize Resend if not already done
    await initializeResend();

    // Send email notification to Farbod
    if (resend && isEmailConfigured) {
      try {
        const emailResult = await resend.emails.send({
          from: "Com-Sec Phishing Test <onboarding@resend.dev>",
          to: ["team@com-sec.io"],
          subject: `🚨 New Phishing Test Request from ${companyName}`,
          text: emailText,
          html: emailHtml,
        });

        console.log("✅ Email sent successfully to Farbod:", emailResult);
      } catch (emailError) {
        console.error("❌ Failed to send email to Farbod:", emailError);
        // Still return success to user, but log the email failure
      }
    } else {
      console.log(
        "⚠️  Email not configured. Set RESEND_API_KEY environment variable.",
      );
      console.log("📧 Would have sent this email to farbod@com-sec.io:");
      console.log(emailText);
    }
    res.status(200).json({
      success: true,
      message: "Form submitted successfully. We'll be in touch shortly!",
    });
  } catch (error) {
    console.error("Error processing phishing test request:", error);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
});

export default router;
