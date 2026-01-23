
// import { createContact } from "../models/Contact.js";

// export const sendContact = async (req, res) => {
//   try {
//     console.log('Contact form submission received:', req.body);
    
//     const { name, email, message } = req.body;
    
//     // Validate required fields - UPDATE THIS
//     if (!name || !email || !message) {
//       return res.status(400).json({ 
//         success: false,
//         message: "All fields are required: name, email, message" 
//       });
//     }
    
//     await createContact(req.body);
    
//     console.log('Message saved to database');
//     res.status(201).json({ 
//       success: true,
//       message: "Message sent successfully" 
//     });
//   } catch (error) {
//     console.error('Error in sendContact:', error);
    
//     // Log the full error for debugging
//     console.error('Full error details:', {
//       message: error.message,
//       code: error.code,
//       sqlMessage: error.sqlMessage
//     });
    
//     res.status(500).json({ 
//       success: false,
//       message: "Failed to send message",
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };
import { createContact } from "../models/Contact.js";
import { sendNotificationEmail } from "../services/emailService.js";

export const sendContact = async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }
    
    // 1. Save to database
    await createContact(req.body);
    
    // 2. Send email notification (don't wait for it)
    sendNotificationEmail(req.body).catch(err => 
      console.error('Email notification failed:', err)
    );
    
    console.log(' Message saved to database');
    res.status(201).json({ 
      success: true,
      message: "Message sent successfully" 
    });
  } catch (error) {
    console.error(' Error in sendContact:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to send message"
    });
  }
};