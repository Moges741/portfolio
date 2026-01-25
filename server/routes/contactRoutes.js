// import express from "express";
// import { sendContact } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/", sendContact);

// export default router;

import express from "express";
import { sendContact } from "../controllers/contactController.js";

const router = express.Router();

// GET endpoint for testing
router.get("/", (req, res) => {
  res.json({ 
    message: "Contact API is working",
    method: "Use POST to submit contact form"
  });
});

// POST endpoint
router.post("/", sendContact);

export default router;