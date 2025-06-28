import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Add a runtime check for the API key to avoid undefined issues
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation for required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send email with Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Make sure this email is verified in Resend if needed
      to: ['rayenbelkahla219@gmail.com'],
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

    // Resend's send method typically returns a success response or throws error,
    // but if you want to be safe, check for error property
    if ('error' in data) {
      return NextResponse.json(
        { message: 'Email send failed.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form:', error);
    return NextResponse.json(
      { message: 'Server error.' },
      { status: 500 }
    );
  }
}
