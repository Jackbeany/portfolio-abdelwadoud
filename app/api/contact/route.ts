import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message.' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // TLS is used
      auth: {
        user: process.env.BREVO_EMAIL, // Username from Brevo (SMTP-login)
        pass: process.env.BREVO_API_KEY, // Brevo API Key (Master Password)
      },
    });

    // Configure email options
    const mailOptions = {
      from: process.env.BREVO_EMAIL, // Sender email (must be verified in Brevo)
      to: process.env.BREVO_EMAIL, // Recipient email (can be yourself)
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

    // Send email
    await transporter.sendMail(mailOptions);

    // Successful response
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
