# Email Setup for Phishing Test Form

## Required: Resend API Key

To enable email notifications to Farbod when users submit phishing test requests, you need to set up Resend:

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your domain (or use their test domain for development)
4. Go to API Keys section
5. Create a new API key

### Step 2: Set Environment Variable

Add this to your environment variables:

```bash
RESEND_API_KEY=re_your_api_key_here
```

### Step 3: Domain Setup (Production)

For production emails from `noreply@com-sec.io`:

1. Add `com-sec.io` domain to Resend
2. Add the required DNS records
3. Verify the domain

### Development Testing

For testing, you can use Resend's test domain which works immediately.

### Current Status

- ✅ Form submits successfully
- ✅ Email code is implemented
- ⏳ Needs RESEND_API_KEY environment variable
- ⏳ Needs domain verification for production

### What Farbod Will Receive

When someone submits the form, Farbod will get a professionally formatted email with:

- All contact information
- Company details
- Employee email list for testing
- Any additional messages
- Timestamp of submission

The email is beautifully formatted with HTML styling and includes all the data needed to follow up on the phishing test request.
