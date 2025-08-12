import { Request, Response } from 'express';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, phone, company, service, budget, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Create email content
    const emailSubject = `Contact Form: ${service || 'General Inquiry'} - ${company}`;
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      
      <p><strong>Contact Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        <li><strong>Company:</strong> ${company}</li>
      </ul>
      
      <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
      <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
      
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>This message was sent from the Com-Sec website contact form.</small></p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Com-Sec Contact Form <onboarding@resend.dev>',
      to: ['farbod@com-sec.io'],
      subject: emailSubject,
      html: emailBody,
    });

    console.log('Contact form email sent successfully:', data);

    res.json({ success: true, messageId: data.id });
  } catch (error) {
    console.error('Error sending contact form email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    });
  }
}
