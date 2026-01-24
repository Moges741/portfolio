import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });
};

export const sendNotificationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL, // your personal email
      subject: `Hello MOGES 👋 New Contact from ${contactData.name}`,
      html: `
        <h2>Message From Client</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong> ${contactData.message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Reply to: <a href="mailto:${contactData.email}">${contactData.email}</a></p>
      `,
      text: `
        New Contact Form Submission
        Name: ${contactData.name}
        Email: ${contactData.email}
        Message: ${contactData.message}
        Time: ${new Date().toLocaleString()}
      `,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Notification email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
