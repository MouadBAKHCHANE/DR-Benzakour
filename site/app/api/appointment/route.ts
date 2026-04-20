import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "drmohammedamalbenzakour@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, date, time } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: RECIPIENT_EMAIL,
      replyTo: email || undefined,
      subject: `Nouvelle demande de rendez-vous — ${name}`,
      html: `
        <h2>Nouvelle demande de rendez-vous depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email || "Non renseigné"}</p>
        <p><strong>Date souhaitée :</strong> ${date}</p>
        <p><strong>Heure souhaitée :</strong> ${time}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
