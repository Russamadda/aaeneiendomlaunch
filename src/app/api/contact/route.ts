import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "aaen.eiendom@hotmail.com";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      address,
      projectType,
      start,
      budget,
      message,
      wantsVisit,
      companyWebsite,
    } = data ?? {};

    // Honeypot: silent success
    if (companyWebsite) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !email || !projectType || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (!CONTACT_FROM) {
      console.error("Missing CONTACT_FROM_EMAIL env var");
      return NextResponse.json({ ok: false, error: "Server misconfigured" }, { status: 500 });
    }

    const wantsVisitLabel = wantsVisit ? "Ja" : "Nei";
    const text = `Ny forespørsel – AAEN Eiendom
----------------------------------
Navn: ${name}
Telefon: ${phone}
E-post: ${email}
Adresse/område: ${address || "Ikke oppgitt"}
Type prosjekt: ${projectType}
Estimert oppstart: ${start || "Ikke oppgitt"}
Budsjett: ${budget || "Ikke oppgitt"}
Ønsker befaring: ${wantsVisitLabel}

Beskrivelse:
${message}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
        <h2>Ny forespørsel – AAEN Eiendom</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Adresse/område:</strong> ${address || "Ikke oppgitt"}</p>
        <p><strong>Type prosjekt:</strong> ${projectType}</p>
        <p><strong>Estimert oppstart:</strong> ${start || "Ikke oppgitt"}</p>
        <p><strong>Budsjett:</strong> ${budget || "Ikke oppgitt"}</p>
        <p><strong>Ønsker befaring:</strong> ${wantsVisitLabel}</p>
        <hr />
        <p><strong>Beskrivelse:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: `Ny forespørsel – AAEN Eiendom: ${projectType}`,
      text,
      html,
    });

    if (result.error) {
      console.error("Resend error", result.error);
      return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
