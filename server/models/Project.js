
// import db from "../DB/db.js";

// // Function names in model
// export const getProjects = () => {
//   return db.promise().query("SELECT * FROM projects ORDER BY id DESC");
// };

// export const addProject = (project) => {
//   const { title, description, github_link, live_link, image_url, category } = project;
  
//   return db.promise().query(
//     `INSERT INTO projects (title, description, github_link, live_link, image_url, category)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [title, description, github_link, live_link, image_url, category]
//   );
// };

// export const getProjectById = (id) => {
//   return db.promise().query("SELECT * FROM projects WHERE id = ?", [id]);
// };

// export const updateProject = (id, project) => {
//   const { title, description, github_link, live_link, image_url, category } = project;
  
//   return db.promise().query(
//     `UPDATE projects 
//      SET title = ?, description = ?, github_link = ?, live_link = ?, image_url = ?, category = ?
//      WHERE id = ?`,
//     [title, description, github_link, live_link, image_url, category, id]
//   );
// };

// export const deleteProject = (id) => {
//   return db.promise().query("DELETE FROM projects WHERE id = ?", [id]);
// };
// models/Project.js
import db from "../config/db.js";

// Get all projects ✅ CORRECT
export const getProjects = async () => {
  const [rows] = await db.query("SELECT * FROM projects ORDER BY id DESC");
  return rows;
};

// Add a new project ✅ CORRECT
export const addProject = async (project) => {
  const { title, description, github_link, live_link, image_url, category } = project;
  const [result] = await db.query(
    `INSERT INTO projects (title, description, github_link, live_link, image_url, category)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, description, github_link, live_link, image_url, category]
  );
  return result;
};

// Get project by ID ✅ FIXED - Added WHERE clause
export const getProjectById = async (id) => {
  const [rows] = await db.query("SELECT * FROM projects WHERE id = ?", [id]);
  return rows[0];
};

// Update a project ✅ CORRECT
export const updateProject = async (id, project) => {
  const { title, description, github_link, live_link, image_url, category } = project;
  const [result] = await db.query(
    `UPDATE projects 
     SET title = ?, description = ?, github_link = ?, live_link = ?, image_url = ?, category = ?
     WHERE id = ?`,
    [title, description, github_link, live_link, image_url, category, id]
  );
  return result;
};

// Delete a project ✅ FIXED - Added WHERE clause
export const deleteProject = async (id) => {
  const [result] = await db.query("DELETE FROM projects WHERE id = ?", [id]);
  return result;
};
