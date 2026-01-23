import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// CORS configuration - allow your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite frontend URL
  credentials: true
}));

app.use(express.json());

// MySQL connection WITH SSL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 19790, // Added fallback
  ssl: {
    ca: readFileSync(process.env.DB_SSL_CA || "./ca.pem") // SSL certificate
  }
});

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    console.log("Trying to connect with config:", {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      hasSSL: !!process.env.DB_SSL_CA
    });
  } else {
    console.log("✅ MySQL connected successfully");
  }
});

// test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running 🚀");
});

// Get PORT from environment or use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} locally at http://localhost:${PORT}`);
});

export default app;