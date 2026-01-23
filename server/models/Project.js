import db from "../DB/db.js";

export const getAllProjects = () => {
  return db.promise().query("SELECT * FROM projects ORDER BY id DESC");
};

export const getProjectById = (id) => {
  return db.promise().query("SELECT * FROM projects WHERE id = ?", [id]);
};

export const createProject = (project) => {
  const { title, description, github_link, live_link, image_url, category } = project;
  
  return db.promise().query(
    `INSERT INTO projects (title, description, github_link, live_link, image_url, category)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, description, github_link, live_link, image_url, category]
  );
};

export const updateProject = (id, project) => {
  const { title, description, github_link, live_link, image_url, category } = project;
  
  return db.promise().query(
    `UPDATE projects 
     SET title = ?, description = ?, github_link = ?, live_link = ?, image_url = ?, category = ?
     WHERE id = ?`,
    [title, description, github_link, live_link, image_url, category, id]
  );
};

export const deleteProject = (id) => {
  return db.promise().query("DELETE FROM projects WHERE id = ?", [id]);
};