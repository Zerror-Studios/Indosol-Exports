import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sheets } from '@googleapis/sheets';
import { GoogleAuth } from 'google-auth-library';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message } = body;

    if (!firstName || !phone || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Standard setup for gmail
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName || ''}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 2. Add to Google Sheets
    if (
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL &&
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY &&
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
    ) {
      const auth = new GoogleAuth({
        credentials: {
          client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
          private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheetsApi = sheets({ version: 'v4', auth });
      const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

      await sheetsApi.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'A1', // Appends to the first available row in the first sheet
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              new Date().toLocaleString(),
              firstName,
              lastName || '',
              email,
              phone,
              message,
            ],
          ],
        },
      });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the message', details: error.message },
      { status: 500 }
    );
  }
}
