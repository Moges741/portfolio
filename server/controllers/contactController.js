
// import { createContact } from "../models/Contact.js";
// import { sendNotificationEmail } from "../services/emailService.js";

// export const sendContact = async (req, res) => {
//   try {
//     console.log('Contact form submission received:', req.body);
    
//     const { name, email, message } = req.body;
    
//     if (!name || !email || !message) {
//       return res.status(400).json({ 
//         success: false,
//         message: "All fields are required" 
//       });
//     }
    
//     // 1. Save to database
//     await createContact(req.body);
    
//     // 2. Send email notification (don't wait for it)
//     sendNotificationEmail(req.body).catch(err => 
//       console.error('Email notification failed:', err)
//     );
    
//     console.log(' Message saved to database');
//     res.status(201).json({ 
//       success: true,
//       message: "Message sent successfully" 
//     });
//   } catch (error) {
//     console.error(' Error in sendContact:', error);
//     res.status(500).json({ 
//       success: false,
//       message: "Failed to send message"
//     });
//   }
// };
// contactController.js - UPDATED VERSION
import { createContact } from "../models/Contact.js";
import { sendNotificationEmail } from "../services/emailService.js";

export const sendContact = async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', req.body);
    console.log('📅 Time:', new Date().toISOString());
    
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }
    
    // 1. Save to database
    console.log('💾 Saving to database...');
    const dbResult = await createContact(req.body);
    console.log('✅ Saved to database. ID:', dbResult.insertId);
    
    // 2. Try to send email (wait for it)
    console.log('📤 Attempting to send email notification...');
    const emailSent = await sendNotificationEmail(req.body);
    
    console.log('📊 Email send result:', emailSent ? 'SUCCESS' : 'FAILED');
    
    res.status(201).json({ 
      success: true,
      message: "Message sent successfully",
      emailSent: emailSent,
      contactId: dbResult.insertId
    });
    
  } catch (error) {
    console.error('❌ Error in sendContact:', error.message);
    console.error('Stack:', error.stack);
    
    res.status(500).json({ 
      success: false,
      message: "Failed to send message",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};