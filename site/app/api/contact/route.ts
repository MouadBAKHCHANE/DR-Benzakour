import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER || "drmohammedamalbenzakour@gmail.com",
      to: "drmohammedamalbenzakour@gmail.com",
      replyTo: email,
      subject: `Nouveau message - ${service || "Contact"} — ${name}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Service :</strong> ${service}</p>` : ""}
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, version: "2.1" },
      { headers: { "X-API-Version": "2.1" } }
    );
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { 
        error: "Erreur lors de l'envoi du message.", 
        details: err.message,
        code: err.code 
      },
      { status: 500 }
    );
  }
}
