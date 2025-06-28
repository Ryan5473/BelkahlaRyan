// src/app/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // or your verified sender email
      to: ['rayenbelkahla219@gmail.com'], // your recipient email
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}
