import express from 'express';
import { Resend } from 'resend';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    await resend.emails.send({
      from: 'team@com-sec.io',
      to: 'farbod@com-sec.io',
      subject: 'New Phishing Test Submission',
      html: `
        <h2>New Phishing Test Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Employees:</strong> ${numberOfEmployees}</p>
        <p><strong>Email Service:</strong> ${emailService}</p>
        <p><strong>Email List:</strong><br>${emailList.replace(/\n/g, '<br>')}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr/>
        <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Resend email error:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

export default router;
