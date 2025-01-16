import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validatie van vereiste velden
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter configureren
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // TLS wordt gebruikt
      auth: {
        user: process.env.BREVO_EMAIL, // Gebruikersnaam uit Brevo (SMTP-login)
        pass: process.env.BREVO_API_KEY, // Brevo API Key (Master Password)
      },
    });

    // E-mail opties configureren
    const mailOptions = {
      from: process.env.BREVO_EMAIL, // E-mail van afzender (moet geverifieerd zijn in Brevo)
      to: process.env.BREVO_EMAIL, // E-mail ontvanger (kan jezelf zijn)
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // E-mail verzenden
    await transporter.sendMail(mailOptions);

    // Succesvolle respons
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
