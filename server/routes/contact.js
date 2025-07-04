import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 Contact form hit!");
  console.log("Form Data:", { name, email, message });

  if (!name || !email || !message) {
    console.log("❌ Missing fields in contact form.");
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Optional: Verify transporter connection
    transporter.verify((error, success) => {
      if (error) {
        console.error("❌ SMTP verification error:", error);
      } else {
        console.log("✅ SMTP Server is ready to send messages");
      }
    });

    console.log(`📨 Attempting to send email to ${process.env.EMAIL_USER} from ${email}`);

    await transporter.sendMail({
      from: `Portfolio Contact <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    res.status(200).json({ success: "Message sent!" });
  } catch (err) {
    console.error("❌ Email sending error:", err);
    res.status(500).json({ error: "Something went wrong. Try again later." });
  }
});

export default router;
