import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 });
  }

  const { name, email, subject, message } = await req.json();

  // Validate input
  if (!name || !email || !message || !subject) {
    return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
  }
  if (!validator.isEmail(email)) {
    return new Response(JSON.stringify({ message: "Invalid email address" }), { status: 400 });
  }
  if (message.length > 1000) { // Optional: Limit message length
    return new Response(JSON.stringify({ message: "Message too long (max 1000 characters)" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <div><p><strong>Name:</strong> ${name}</p></div>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div><p><strong>Message:</strong> ${message}</p></div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: error.message || "Failed to send message" }), { status: 500 });
  }
}