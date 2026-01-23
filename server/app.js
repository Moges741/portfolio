// import express from "express";
// import cors from "cors";
// import mysql from "mysql2";
// import dotenv from "dotenv";
// import projectRoutes from "./routes/projectRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";





// dotenv.config();

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
  
// }); 
// // routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/contact", contactRoutes);
// // connect to DB
// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection failed:", err.message);
//   } else {
//     console.log("MySQL connected successfully");
//   }
// });

// // test route
// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running 🚀");
// });

// export default app;

import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
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

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
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