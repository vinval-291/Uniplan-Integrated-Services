import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log(`🛠️ Starting server in ${process.env.NODE_ENV || 'development'} mode`);

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
    connectionTimeout: 5000, // 5 seconds
    greetingTimeout: 5000,   // 5 seconds
    socketTimeout: 5000,     // 5 seconds
    debug: true,             // Enable debug output
    logger: true             // Log to console
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log("New Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Send Email Notification in background (non-blocking)
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

      // We don't 'await' this so the API responds immediately
      transporter.sendMail(mailOptions).then(() => {
        console.log("Email notification sent successfully.");
      }).catch((error: any) => {
        if (error.message && error.message.includes('534-5.7.9')) {
          console.error("❌ GMAIL ERROR: You must use an 'App Password' instead of your regular password.");
        } else if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
          console.error("❌ EMAIL TIMEOUT: The connection to the SMTP server timed out.");
        } else {
          console.error("Error sending email notification:", error);
        }
      });
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

    // Explicit SPA fallback for development
    app.get('*', async (req, res, next) => {
      // Skip API routes
      if (req.originalUrl.startsWith('/api/')) {
        return next();
      }

      console.log(`🌐 SPA Fallback (Dev): ${req.originalUrl}`);
      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        if (!fs.existsSync(indexPath)) {
          console.error(`❌ index.html not found at ${indexPath}`);
          return next();
        }

        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        console.error(`❌ SPA Fallback Error:`, e);
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    console.log(`📦 Serving production build from ${distPath}`);
    
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      // Skip API routes
      if (req.originalUrl.startsWith('/api/')) {
        return res.status(404).json({ error: 'API route not found' });
      }
      
      console.log(`🌐 SPA Fallback (Prod): ${req.originalUrl}`);
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
