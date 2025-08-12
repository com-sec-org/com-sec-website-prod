import { Request, Response } from 'express';
import { Resend } from 'resend';

// Initialize Resend with error handling
let resend: Resend | null = null;
let isEmailConfigured = false;

const initializeResend = () => {
  try {
    if (process.env.RESEND_CONTACT_API_KEY) {
      resend = new Resend(process.env.RESEND_CONTACT_API_KEY);
      isEmailConfigured = true;
      console.log("✅ Contact form Resend API initialized successfully with contact key");
    } else {
      console.log("⚠️  RESEND_CONTACT_API_KEY not found in environment variables");
    }
  } catch (error) {
    console.error("❌ Failed to initialize Contact form Resend:", error);
  }
};

// Initialize on startup
initializeResend();

export async function submitContactForm(req: Request, res: Response) {
  const { firstName, lastName, email, phone, company, service, budget, message } = req.body;
  const timestamp = new Date().toISOString();

  console.log("📧 Contact form submission received:", { email, company });
  console.log("🔍 Debug - resend:", !!resend, "isEmailConfigured:", isEmailConfigured);
  console.log("🔍 Debug - RESEND_CONTACT_API_KEY present:", !!process.env.RESEND_CONTACT_API_KEY);

  // Check if Resend is configured
  if (!resend || !isEmailConfigured) {
    console.log("⚠️  Email not configured. Logging submission instead:");
    console.log({
      firstName, lastName, email, phone, company, service, budget, message, timestamp
    });

    // Still return success to user
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully (email service not configured)'
    });
  }

  // Validate required fields
  if (!firstName || !lastName || !email || !company || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  try {
    const emailResult = await resend.emails.send({
      from: 'Com-Sec <onboarding@resend.dev>',
      to: ['parag@com-sec.io'],
      subject: `💬 New Contact Form Inquiry from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">💬 New Contact Form Inquiry</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company}</p>
          </div>

          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Service Details</h3>
            <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          </div>

          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;"/>
          <p style="color: #6b7280; font-size: 14px;">
            <em>Submitted: ${new Date(timestamp).toLocaleString()}</em>
          </p>
        </div>
      `,
      text: `
New Contact Form Inquiry

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}

Service Details:
Service Interest: ${service || 'Not specified'}
Budget Range: ${budget || 'Not specified'}

Message:
${message}

Submitted: ${new Date(timestamp).toLocaleString()}
      `
    });

    console.log("✅ Contact form email sent successfully:", emailResult);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      emailId: emailResult.id
    });
  } catch (error) {
    console.error('❌ Contact form email error:', error);

    // Log the submission even if email fails
    console.log("📝 Contact form data (email failed):", {
      firstName, lastName, email, phone, company, service, budget, message, timestamp
    });

    res.status(500).json({
      success: false,
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
