// Minimal standalone server for the landing page's one API route.
// Static files (dist/) are served directly by nginx — this process only
// handles /api/contact, proxied through by nginx. Kept separate from the
// main backero-backend app since this is a single, unrelated public-facing
// form with no auth/DB dependency.
import express from 'express';
const app = express();

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ error: 'Email sending is not configured yet.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Backero Website <onboarding@resend.dev>',
        to: process.env.CONTACT_TO_EMAIL || 'backeroindia@gmail.com',
        reply_to: email,
        subject: `New enquiry: ${subject || 'Website Contact Form'}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nSubject: ${subject || '-'}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return res.status(502).json({ error: 'Email send failed', detail });
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5055;
app.listen(PORT, () => console.log(`Landing page contact API listening on ${PORT}`));
