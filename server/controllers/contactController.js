import { createContact } from "../models/Contact.js";

export const sendContact = async (req, res) => {
  try {
    await createContact(req.body);
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
};
