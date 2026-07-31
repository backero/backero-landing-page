export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, phone, subject, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Backero Website <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || "backeroindia@gmail.com",
        reply_to: email,
        subject: `New enquiry: ${subject || "Website Contact Form"}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nSubject: ${subject || "-"}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      res.status(502).json({ error: "Email send failed", detail });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
