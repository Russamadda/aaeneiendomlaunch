import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      phone,
      email,
      address,
      projectType,
      startTime,
      budget,
      description,
      befaring,
    } = data;

    if (!fullName || !phone || !email || !projectType || !startTime || !budget || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const body = `
Ny forespørsel fra nettsiden
----------------------------
Navn: ${fullName}
Telefon: ${phone}
E-post: ${email}
Adresse/område: ${address || "-"}
Type prosjekt: ${projectType}
Estimert oppstart: ${startTime}
Budsjettintervall: ${budget}
Ønsker gratis befaring: ${befaring ? "Ja" : "Nei"}

Beskrivelse:
${description}
`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "aaen.eiendom@hotmail.com",
      replyTo: email,
      subject: `Ny forespørsel – AAEN Eiendom: ${projectType}`,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
