import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Transporter Setup
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: process.env.EMAIL_SECURE !== 'false',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // Do not fail on invalid certs (common for shared hosting)
      rejectUnauthorized: false
    },
    connectionTimeout: 15000, // 15 seconds
    greetingTimeout: 15000,   // 15 seconds
    socketTimeout: 15000,     // 15 seconds
    debug: true,              // Enable debug output
    logger: true              // Log to console
  });

  // Verify transporter on startup
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const port = process.env.EMAIL_PORT || '465';
    const secure = process.env.EMAIL_SECURE !== 'false';
    
    console.log(`🚀 Attempting SMTP verification:`);
    console.log(`   Host: ${host}`);
    console.log(`   Port: ${port}`);
    console.log(`   Secure: ${secure}`);
    console.log(`   User: ${process.env.EMAIL_USER}`);

    transporter.verify((error, success) => {
      if (error) {
        console.error("❌ SMTP Verification Failed:");
        console.error("Error Code:", (error as any).code);
        console.error("Error Message:", error.message);
        if ((error as any).command) console.error("Command:", (error as any).command);
        if ((error as any).response) console.error("Response:", (error as any).response);
        
        console.error("👉 Troubleshooting for Namecheap:");
        console.error("- If Port is 465, EMAIL_SECURE must be 'true'");
        console.error("- If Port is 587, EMAIL_SECURE must be 'false'");
        console.error("- If both timeout, try host 'mail.privateemail.com' vs 'mail.yourdomain.com'");
      } else {
        console.log("✅ SMTP Server is ready to take our messages");
      }
    });
  }

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log("New Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || 'kuteyioluwaloyevincent291@gmail.com',
        subject: `New Uniplan Contact: ${subject}`,
        text: `
          You have a new message from your website contact form.
          
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0F172A; color: white; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">New Contact Submission</h2>
            </div>
            <div style="padding: 30px; color: #334155;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
              This email was sent from your Uniplan Integrated Services website.
            </div>
          </div>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email notification sent successfully.");
      } catch (error: any) {
        if (error.message && error.message.includes('534-5.7.9')) {
          console.error("❌ GMAIL ERROR: You must use an 'App Password' instead of your regular password.");
          console.error("👉 Fix: Go to Google Account > Security > App Passwords and generate a 16-character code.");
        } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
          console.error("❌ EMAIL TIMEOUT: The connection to the SMTP server timed out.");
          console.error("👉 Troubleshooting:");
          console.error("1. If using port 465, set EMAIL_SECURE=true.");
          console.error("2. If using port 587, set EMAIL_SECURE=false.");
          console.error("3. If port 465 is timing out, try port 587 with EMAIL_SECURE=false.");
          console.error("4. Verify your EMAIL_HOST (e.g., 'mail.privateemail.com' for Namecheap).");
        } else {
          console.error("Error sending email notification:", error);
        }
      }
    } else {
      console.warn("Email credentials not found. Skipping email notification.");
    }

    res.status(200).json({ 
      success: true, 
      message: "Thank you for your message. We will get back to you shortly!" 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
