import express from 'express';
import { Resend } from 'resend';

const router = express.Router();

// Initialize Resend with error handling
let resend: Resend | null = null;
let isEmailConfigured = false;

const initializeResend = () => {
  try {
    if (process.env.RESEND_API_KEY) {
      resend = new Resend(process.env.RESEND_API_KEY);
      isEmailConfigured = true;
      console.log("✅ Resend API initialized successfully");
    } else {
      console.log("⚠️  RESEND_API_KEY not found in environment variables");
    }
  } catch (error) {
    console.error("❌ Failed to initialize Resend:", error);
  }
};

// Initialize on startup
initializeResend();

router.post('/submit-phishing-test', async (req, res) => {
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

  console.log("📧 Phishing test form submission received:", { email, companyName });

  // Check if Resend is configured
  if (!resend || !isEmailConfigured) {
    console.log("⚠️  Email not configured. Logging submission instead:");
    console.log({
      email,
      firstName,
      lastName,
      companyName,
      numberOfEmployees,
      emailService,
      emailList,
      message,
      timestamp
    });

    // Still return success to user
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully (email service not configured)'
    });
  }

  try {
    const emailResult = await resend.emails.send({
      from: 'Com-Sec <onboarding@resend.dev>', // Use Resend's verified domain
      to: ['team@com-sec.io'],
      subject: `🚨 New Phishing Test Request from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">🚨 New Phishing Test Request</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Number of Employees:</strong> ${numberOfEmployees}</p>
          </div>

          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Technical Details</h3>
            <p><strong>Email Service:</strong> ${emailService}</p>
            <p><strong>Email List:</strong></p>
            <pre style="background: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${emailList}</pre>
          </div>

          ${message ? `
          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Additional Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;"/>
          <p style="color: #6b7280; font-size: 14px;">
            <em>Submitted: ${new Date(timestamp).toLocaleString()}</em>
          </p>
        </div>
      `,
      text: `
New Phishing Test Request

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${companyName}
Employees: ${numberOfEmployees}

Technical Details:
Email Service: ${emailService}
Email List:
${emailList}

${message ? `Additional Message:\n${message}\n` : ''}

Submitted: ${new Date(timestamp).toLocaleString()}
      `
    });

    console.log("✅ Email sent successfully:", emailResult);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      emailId: emailResult.id
    });
  } catch (error) {
    console.error('❌ Resend email error:', error);

    // Log the submission even if email fails
    console.log("📝 Form data (email failed):", {
      email, firstName, lastName, companyName, numberOfEmployees,
      emailService, emailList, message, timestamp
    });

    res.status(500).json({
      success: false,
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
