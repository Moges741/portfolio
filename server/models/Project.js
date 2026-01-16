import db from "../DB/db.js";

export const getAllProjects = () => {
  return db.promise().query("SELECT * FROM projects ORDER BY id DESC");
};

export const createProject = (project) => {
  const { title, description, github_link, live_link } = project;

  return db
    .promise()
    .query(
      `INSERT INTO projects (title, description, github_link, live_link)
       VALUES (?, ?, ?, ?)`,
      [title, description, github_link, live_link]
    );
};
