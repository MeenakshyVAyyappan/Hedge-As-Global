const nodemailer = require('nodemailer');

async function test() {
  const smtpUser = 'hedgeenquiries@gmail.com';
  const smtpPass = 'ohpexwtrkzqkupnj';

  console.log('Testing SMTP connection with:', smtpUser);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Test Form" <${smtpUser}>`,
      to: smtpUser,
      subject: 'Test Email from Node',
      text: 'Hello, this is a test email.',
    });
    console.log('SUCCESS! Email sent:', info.messageId);
  } catch (err) {
    console.error('ERROR:', err);
  }
}

test();
