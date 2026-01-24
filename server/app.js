// import express from "express";
// import cors from "cors";
// import mysql from "mysql2";
// import dotenv from "dotenv";
// import { readFileSync } from "fs";
// import projectRoutes from "./routes/projectRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();

// const app = express();

// // CORS configuration - allow your frontend
// app.use(cors({
//   origin: 'http://localhost:5173',
//    // Your Vite frontend URL

//   credentials: true
// }));

// app.use(express.json());

// // MySQL connection WITH SSL
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 19790, // Added fallback
//   ssl: {
//     ca: readFileSync(process.env.DB_SSL_CA || "./ca.pem") // SSL certificate
//   }
// });

// // routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/contact", contactRoutes);

// // connect to DB
// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection failed:", err.message);
//     console.log("Trying to connect with config:", {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       database: process.env.DB_NAME,
//       port: process.env.DB_PORT,
//       hasSSL: !!process.env.DB_SSL_CA
//     });
//   } else {
//     console.log("MySQL connected successfully");
//   }
// });

// // test route
// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running 🚀");
// });

// // Get PORT from environment or use 5000
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT} locally at http://localhost:${PORT}`);
// });

// export default app;

import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// CORS configuration - allow both local and production
const allowedOrigins = [
  'http://localhost:5173', // Local development
  'https://myportfolio-e4rf.vercel.app', // Your main Vercel URL
  'https://myportfolio-e4rf-git-main-moges-sisays-projects-c5465d4e.vercel.app', // Branch deployment
  'https://myportfolio-e4rf-40aija2dx-moges-sisays-projects-c5465d4e.vercel.app', // Preview deployment
  'https://portfolio-jf5k.onrender.com', // Your backend itself
  'https://*.vercel.app' // All Vercel deployments
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Also allow any vercel.app subdomain
    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }
    
    // Allow any render.com subdomain
    if (origin.endsWith('.onrender.com')) {
      return callback(null, true);
    }
    
    const msg = 'CORS error: Origin not allowed';
    console.log('Blocked origin:', origin);
    return callback(new Error(msg), false);
  },
  credentials: true
}));

app.use(express.json());

// MySQL connection WITH SSL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 19790,
  ssl: process.env.DB_SSL_CA ? {
    ca: process.env.DB_SSL_CA.replace(/\\n/g, '\n') // ✅ Use certificate content directly
  } : null
});

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// connect to DB
db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    console.log("Trying to connect with config:", {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      hasSSL: !!process.env.DB_SSL_CA
    });
  } else {
    console.log("MySQL connected successfully");
  }
});

// Health check endpoint (important for Render)
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "portfolio-backend"
  });
});

// test route
app.get("/", (req, res) => {
  res.json({ 
    message: "Portfolio Backend API",
    endpoints: {
      projects: "/api/projects",
      contact: "/api/contact",
      health: "/api/health"
    }
  });
});

// Get PORT from environment or use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Deployed: https://portfolio-jf5k.onrender.com`);
});

export default app;