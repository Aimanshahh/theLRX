import GuideSubscriber from "../models/guidesubscriber.mjs";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

export const subscribeGuide = async (req, res) => {
  const { email } = req.body;

  console.log("📩 Request received:", email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // prevent duplicates
    const existing = await GuideSubscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    await GuideSubscriber.create({ email });

    // PDF path
    const pdfPath = path.join(
      process.cwd(),
      "guide",
      "LiquidRX_Protein_Weight_Loss_Guide.pdf"
    );

    if (!fs.existsSync(pdfPath)) {
      console.error("❌ PDF not found:", pdfPath);
      return res.status(500).json({ message: "Guide PDF not found" });
    }

    const pdfBuffer = fs.readFileSync(pdfPath);

    const { data, error } = await resend.emails.send({
      from: "LiquidRX <onboarding@resend.dev>",
      to: [email], // must be array
      subject: "Your Free LiquidRX Protein Guide",
      html: `
        <p>Hi!</p>
        <p>Thanks for subscribing. Your free <strong>Protein Guide</strong> is attached.</p>
      `,
      attachments: [
        {
          filename: "LiquidRX_Protein_Weight_Loss_Guide.pdf",
          content: pdfBuffer, // BUFFER (IMPORTANT)
        },
      ],
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return res.status(500).json({ message: "Email failed", error });
    }

    console.log("📧 Email sent:", data);

    return res.status(201).json({
      message: "Subscribed & guide sent",
    });
  } catch (err) {
    console.error("❌ Server error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
