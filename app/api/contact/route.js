import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    // ✅ Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "❌ Please fill all fields." },
        { status: 400 }
      );
    }

    // ✅ Gmail credentials from .env.local
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    if (!user || !pass) {
      return Response.json(
        {
          success: false,
          message:
            "❌ Mail service not configured. Set GMAIL_USER and GMAIL_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // ✅ Send mail
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user, // apne hi Gmail par aayega
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>📩 New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr/>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json(
      { success: true, message: "✅ Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Mail send error:", error);
    return Response.json(
      {
        success: false,
        message: "⚠️ Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
