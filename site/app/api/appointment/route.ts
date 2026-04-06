import { NextResponse } from "next/server";

// TODO: Replace with the doctor's email when provided
const RECIPIENT_EMAIL = "drbenzakouramal@gmail.com";

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

    // TODO: Integrate with an email service (Resend, SendGrid, Nodemailer, etc.)
    // For now, log the submission — replace this with actual email sending.
    console.log("New appointment request:", {
      to: RECIPIENT_EMAIL,
      name,
      phone,
      email: email || "not provided",
      date,
      time,
      receivedAt: new Date().toISOString(),
    });

    // Example with Resend (uncomment and configure when ready):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@votre-domaine.com",
    //   to: RECIPIENT_EMAIL,
    //   subject: `Nouvelle demande de rendez-vous — ${name}`,
    //   html: `
    //     <h2>Nouvelle demande de rendez-vous</h2>
    //     <p><strong>Nom :</strong> ${name}</p>
    //     <p><strong>Téléphone :</strong> ${phone}</p>
    //     <p><strong>Email :</strong> ${email || "—"}</p>
    //     <p><strong>Date souhaitée :</strong> ${date}</p>
    //     <p><strong>Heure :</strong> ${time}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
