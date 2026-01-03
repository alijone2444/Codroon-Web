import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, services, budget, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can:
    // 1. Save to database
    // 2. Send email using a service (SendGrid, Resend, Nodemailer, etc.)
    // 3. Send to a CRM (HubSpot, Salesforce, etc.)
    // 4. Send to a webhook (Zapier, Make, etc.)

    // For now, we'll log the data and return success
    // In production, replace this with actual email sending or database storage
    console.log('Contact Form Submission:', {
      fullName,
      email,
      services,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email sending service
    // Example with a service like Resend or SendGrid:
    /*
    const emailService = require('your-email-service');
    await emailService.send({
      to: 'hello@codroon.com',
      from: 'noreply@codroon.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${services.join(', ') || 'None selected'}</p>
        <p><strong>Budget:</strong> $${budget.toLocaleString()}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
