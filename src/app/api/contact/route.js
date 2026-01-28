import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, contactReasons, budget, message } = body;

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

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('codroon');
    const collection = db.collection('contact_submissions');

    // Create submission document
    const submission = {
      fullName,
      email,
      contactReasons: contactReasons || [],
      budget: budget || 0,
      message,
      submittedAt: new Date(),
      status: 'new',
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Insert into database
    const result = await collection.insertOne(submission);

    console.log('Contact form saved to MongoDB:', {
      id: result.insertedId,
      email,
      timestamp: submission.submittedAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        id: result.insertedId.toString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

