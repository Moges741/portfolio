// // emailService.js - UPDATED VERSION
// import nodemailer from 'nodemailer';

// const createTransporter = () => {
//   // Check if we have email credentials
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//     console.log('❌ Email credentials missing in environment variables');
//     console.log('Set EMAIL_USER and EMAIL_PASS in Render Environment');
//     return null;
//   }
  
//   console.log('🔧 Creating email transporter for:', process.env.EMAIL_USER);
  
//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS.trim(), // Trim any whitespace
//     },
//   });
// };

// export const sendNotificationEmail = async (contactData) => {
//   let transporter;
  
//   try {
//     console.log('📧 Starting email send process...');
    
//     transporter = createTransporter();
    
//     if (!transporter) {
//       console.log('⚠️ Email service not available. Check your .env file on Render.');
//       console.log('Required: EMAIL_USER, EMAIL_PASS, NOTIFICATION_EMAIL');
//       return false;
//     }
    
//     // Verify connection first
//     console.log('🔌 Verifying email connection...');
//     await transporter.verify();
//     console.log('✅ Email server connection verified');
    
//     const mailOptions = {
//       from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
//       replyTo: contactData.email,
//       subject: `📬 New Message from ${contactData.name} - Portfolio Contact`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
//           <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
          
//           <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
//             <p><strong>👤 Name:</strong> ${contactData.name}</p>
//             <p><strong>📧 Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
//             <p><strong>📝 Message:</strong></p>
//             <div style="background: white; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
//               ${contactData.message.replace(/\n/g, '<br>')}
//             </div>
//             <p><strong>🕐 Received:</strong> ${new Date().toLocaleString()}</p>
//           </div>
          
//           <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #7f8c8d;">
//             <p>This is an automated message from your portfolio website backend.</p>
//             <p>Reply to: <a href="mailto:${contactData.email}">${contactData.email}</a></p>
//           </div>
//         </div>
//       `,
//       text: `
//         NEW CONTACT FORM SUBMISSION
        
//         Name: ${contactData.name}
//         Email: ${contactData.email}
//         Message: ${contactData.message}
        
//         Time: ${new Date().toLocaleString()}
        
//         ---
//         This is an automated message from your portfolio website.
//         Reply to: ${contactData.email}
//       `
//     };
    
//     console.log('📤 Sending email...');
//     console.log('From:', mailOptions.from);
//     console.log('To:', mailOptions.to);
    
//     const info = await transporter.sendMail(mailOptions);
    
//     console.log('✅ Email sent successfully!');
//     console.log('📮 Message ID:', info.messageId);
//     console.log('📧 Accepted recipients:', info.accepted);
    
//     return true;
    
//   } catch (error) {
//     console.error('❌ EMAIL SEND FAILED:', error.message);
    
//     // Detailed error info
//     if (error.code === 'EAUTH') {
//       console.error('🔐 AUTHENTICATION ERROR:');
//       console.error('- Check if you are using APP PASSWORD (not regular password)');
//       console.error('- Enable 2-factor authentication on Google');
//       console.error('- Generate app password at: https://myaccount.google.com/apppasswords');
//     } else if (error.code === 'EENVELOPE') {
//       console.error('📧 INVALID EMAIL ADDRESS:', error.command);
//     } else if (error.code === 'ECONNECTION') {
//       console.error('🌐 CONNECTION ERROR: Check internet/TLS settings');
//     }
    
//     console.error('Full error:', error);
//     return false;
//   } finally {
//     if (transporter) {
//       transporter.close();
//     }
//   }
// };
// emailService.js - SendGrid Version
import sgMail from '@sendgrid/mail';

export const sendNotificationEmail = async (contactData) => {
  try {
    console.log('📧 Starting SendGrid email process...');
    
    // Check if API key exists
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SENDGRID_API_KEY not found in environment variables');
      console.log('Add SENDGRID_API_KEY to Render Environment Variables');
      return false;
    }
    
    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    console.log('✅ SendGrid initialized');
    console.log('From:', process.env.EMAIL_FROM);
    console.log('To:', process.env.EMAIL_TO);
    
    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      replyTo: contactData.email,
      subject: `📬 New Contact: ${contactData.name}`,
      text: `
        NEW CONTACT FORM SUBMISSION
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Message: ${contactData.message}
        
        Time: ${new Date().toLocaleString()}
        
        ---
        Reply to: ${contactData.email}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; }
            .header { background: #4F46E5; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; background: #f9f9f9; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #4F46E5; margin: 15px 0; }
            .footer { padding: 15px; background: #f1f1f1; border-top: 1px solid #ddd; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
          </div>
          
          <div class="content">
            <p><strong>👤 Name:</strong> ${contactData.name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            
            <div class="message-box">
              <strong>💬 Message:</strong><br>
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
            
            <p><strong>🕐 Received:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="footer">
            <p>This is an automated message from your portfolio website.</p>
            <p><a href="mailto:${contactData.email}" style="color: #4F46E5;">Click here to reply</a></p>
          </div>
        </body>
        </html>
      `
    };
    
    console.log('📤 Sending email via SendGrid...');
    const response = await sgMail.send(msg);
    
    console.log('✅ Email sent successfully via SendGrid!');
    console.log('📮 Status Code:', response[0].statusCode);
    console.log('📧 Message ID:', response[0].headers['x-message-id']);
    
    return true;
    
  } catch (error) {
    console.error('❌ SendGrid Error:', error.message);
    
    // Detailed error info
    if (error.response) {
      console.error('📊 SendGrid Response Body:', error.response.body);
      console.error('🔧 SendGrid Response Headers:', error.response.headers);
    }
    
    return false;
  }
};