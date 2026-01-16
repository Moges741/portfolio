import { getAllProjects, createProject } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const [projects] = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
    console.error("!!! ERROR in getProjects !!!");
    console.error(error);
  }
};

export const addProject = async (req, res) => {
  try {
    await createProject(req.body);
    res.status(201).json({ message: "Project added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add project" });
    console.error("!!! ERROR in addProject !!!");
    console.error(error);
  }
};
