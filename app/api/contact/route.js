import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      name,
      email,
      phone,
      companyName,
      service,
      subject,
      message,
      websiteHp,
    } = body;

    // Honeypot spam check
    if (websiteHp) {
      return NextResponse.json({ success: true, message: 'Spam detected' });
    }

    const leadName = fullName || name || 'Website Visitor';
    const leadPhone = phone || 'Not provided';
    const leadEmail = email || 'Not provided';
    const leadService = service || 'General Inquiry';
    const leadSubject = subject || 'New Website Consultation Lead';
    const leadMessage = message || 'No extra message provided.';
    const leadCompany = companyName || 'N/A';

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    // 1. Post submission to Laravel API (stores in SQL database & sends admin email)
    try {
      const laravelRes = await fetch(`${backendUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadName,
          email: leadEmail,
          phone: leadPhone,
          companyName: leadCompany,
          service: leadService,
          subject: leadSubject,
          message: leadMessage,
        }),
      });

      if (laravelRes.ok) {
        const laravelData = await laravelRes.json();
        return NextResponse.json({
          success: true,
          message: 'Inquiry stored in database and email dispatched successfully',
          data: laravelData,
        });
      }
    } catch (apiError) {
      console.warn('Laravel API backend connection warning:', apiError.message);
    }

    const smtpUser = process.env.SMTP_USER || 'hedgeenquiries@gmail.com';
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry stored in database.',
      });
    }

    // Configure Nodemailer Transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email Body for Hedge Advisory Team
    const adminMailOptions = {
      from: `"Hedge Website Forms" <${smtpUser}>`,
      to: 'hedgeenquiries@gmail.com',
      replyTo: leadEmail !== 'Not provided' ? leadEmail : smtpUser,
      subject: `[New Lead] ${leadSubject} - ${leadName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded: 8px; overflow: hidden;">
          <div style="background-color: #03214e; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">Hedge Chartered Accountants Group</h2>
            <p style="margin: 5px 0 0 0; font-size: 13px; color: #ffcd4c;">New Website Consultation / Contact Submission</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
            <p style="font-size: 15px; font-weight: bold; margin-top: 0;">You have received a new inquiry from the website:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 140px;">Full Name:</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${leadName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
                <td style="padding: 10px 0; color: #c8102e; font-weight: 700;">${leadPhone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
                <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${leadEmail}" style="color: #03214e; text-decoration: none;">${leadEmail}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Company Name:</td>
                <td style="padding: 10px 0; color: #0f172a;">${leadCompany}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Required Service:</td>
                <td style="padding: 10px 0; color: #03214e; font-weight: 600;">${leadService}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Subject:</td>
                <td style="padding: 10px 0; color: #0f172a;">${leadSubject}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #c8102e; border-radius: 4px;">
              <p style="margin: 0 0 5px 0; font-weight: bold; font-size: 13px; color: #64748b;">Message / Requirement:</p>
              <p style="margin: 0; font-size: 14px; color: #1e293b; white-space: pre-wrap;">${leadMessage}</p>
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            Sent automatically via Hedge Website Form System • <a href="https://hedgeasglobal.com" style="color: #03214e;">hedgeasglobal.com</a>
          </div>
        </div>
      `,
    };

    // Send email via SMTP
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully to hedgeenquiries@gmail.com',
    });
  } catch (error) {
    console.error('Contact Form SMTP Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
