import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TO = process.env.SENDGRID_TO || 'sealab.seatech@gmail.com';
const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@seatech.example.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(req: Request) {
  if (!SENDGRID_API_KEY) {
    return NextResponse.json({ error: 'SendGrid API key not configured' }, { status: 500 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { prenom, nom, email, message } = body || {};
  if (!prenom || !nom || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const subject = `Demande de devis - ${prenom} ${nom}`;
  const text = `Nom: ${prenom} ${nom}\nEmail: ${email}\n\n${message}`;

  try {
    await sgMail.send({
      to: SENDGRID_TO,
      from: SENDGRID_FROM,
      subject,
      text,
      html: `<p><strong>Nom:</strong> ${prenom} ${nom}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('SendGrid error:', error);
    const msg = error?.message || 'Error sending email';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
