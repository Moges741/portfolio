
// import express from "express";
// import cors from "cors";
// import mysql from "mysql2";
// import dotenv from "dotenv";
// import projectRoutes from "./routes/projectRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();

// const app = express();

// // CORS configuration - allow both local and production
// const allowedOrigins = [
//   'http://localhost:5173', // Local development
//   'https://myportfolio-e4rf.vercel.app', // Your main Vercel URL
//   'https://myportfolio-e4rf-git-main-moges-sisays-projects-c5465d4e.vercel.app', // Branch deployment
//   'https://myportfolio-e4rf-40aija2dx-moges-sisays-projects-c5465d4e.vercel.app', // Preview deployment
//   'https://portfolio-jf5k.onrender.com', // Your backend itself
//   'https://*.vercel.app' // All Vercel deployments
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
    
//     // Check if origin is in allowed list
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }
    
//     // Also allow any vercel.app subdomain
//     if (origin.endsWith('.vercel.app')) {
//       return callback(null, true);
//     }
    
//     // Allow any render.com subdomain
//     if (origin.endsWith('.onrender.com')) {
//       return callback(null, true);
//     }
    
//     const msg = 'CORS error: Origin not allowed';
//     console.log('Blocked origin:', origin);
//     return callback(new Error(msg), false);
//   },
//   credentials: true
// }));

// app.use(express.json());

// // MySQL connection for FreeMySQLDatabase.com (NO SSL needed)
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT, // FreeMySQL uses 3306
// });

// // Test database query
// app.get("/api/test-query", (req, res) => {
//   db.query("SHOW TABLES", (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       const tables = results.map(row => Object.values(row)[0]);
//       res.json({ tables, count: tables.length });
//     }
//   });
// });

// // Test projects table specifically
// app.get("/api/test-projects", (req, res) => {
//   db.query("SELECT * FROM projects LIMIT 5", (err, results) => {
//     if (err) {
//       res.status(500).json({ 
//         error: err.message,
//         hint: "Table might not exist" 
//       });
//     } else {
//       res.json({ 
//         count: results.length, 
//         projects: results 
//       });
//     }
//   });
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
//       port: process.env.DB_PORT
//       // No SSL needed for FreeMySQLDatabase
//     });
//   } else {
//     console.log("MySQL connected successfully");
//   }
  
// });


// // Health check endpoint (important for Render)
// app.get("/api/health", (req, res) => {
//   res.status(200).json({ 
//     status: "healthy",
//     timestamp: new Date().toISOString(),
//     service: "portfolio-backend"
//   });
// });

// // test route
// app.get("/", (req, res) => {
//   res.json({ 
//     message: "Portfolio Backend API",
//     endpoints: {
//       projects: "/api/projects",
//       contact: "/api/contact",
//       health: "/api/health",
//       testTables: "/api/test-query",
//       testProjects: "/api/test-projects"
//     }
//   });
// });

// // Get PORT from environment or use 5000
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Local: http://localhost:${PORT}`);
//   console.log(`Deployed: https://portfolio-jf5k.onrender.com`);
// });


// export default app;

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import pool from "./config/db.js";


const app = express();

// CORS configuration - allow both local and production
const allowedOrigins = [
  'http://localhost:5173',
  'https://myportfolio-e4rf.vercel.app',
  'https://myportfolio-e4rf-git-main-moges-sisays-projects-c5465d4e.vercel.app',
  'https://myportfolio-e4rf-40aija2dx-moges-sisays-projects-c5465d4e.vercel.app',
  'https://portfolio-jf5k.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);
    if (origin.endsWith('.vercel.app')) return callback(null, true);
    if (origin.endsWith('.onrender.com')) return callback(null, true);

    console.log('Blocked origin:', origin);
    return callback(new Error('CORS error: Origin not allowed'), false);
  },
  credentials: true
}));

app.use(express.json());

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "portfolio-backend"
  });
});

// Test route
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
app.get("/api/debug-all-projects", async (req, res) => {
  try {
    const [projects] = await pool.query("SELECT * FROM projects");
    res.json({
      count: projects.length,
      projects: projects,
      columns: projects.length > 0 ? Object.keys(projects[0]) : []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Deployed: https://portfolio-jf5k.onrender.com`);
});

export default app;
