// ✅ CORRECT: Import model functions with different names
import { 
  getProjects as getProjectsModel, 
  addProject as addProjectModel,
  getProjectById as getProjectByIdModel,
  updateProject as updateProjectModel,
  deleteProject as deleteProjectModel
} from "../models/Project.js";

// ✅ GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await getProjectsModel(); // Use imported function
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ 
      message: "Failed to fetch projects",
      error: error.message 
    });
  }
};

// ✅ POST create new project
export const addProject = async (req, res) => {
  try {
    const project = req.body;
    
    // Basic validation
    if (!project.title || !project.description) {
      return res.status(400).json({ 
        message: "Title and description are required" 
      });
    }
    
    const [result] = await addProjectModel(project); // Use imported function
    res.status(201).json({ 
      message: "Project created successfully",
      id: result.insertId,
      ...project 
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ 
      message: "Failed to create project",
      error: error.message 
    });
  }
};

// ✅ GET single project
export const getProjectById = async (req, res) => {
  try {
    const [project] = await getProjectByIdModel(req.params.id);
    
    if (project.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.status(200).json(project[0]);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ 
      message: "Failed to fetch project",
      error: error.message 
    });
  }
};

// ✅ PUT update project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = req.body;
    
    // Check if project exists
    const [existing] = await getProjectByIdModel(id);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    await updateProjectModel(id, project);
    res.status(200).json({ 
      message: "Project updated successfully",
      id,
      ...project 
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ 
      message: "Failed to update project",
      error: error.message 
    });
  }
};

// ✅ DELETE project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if project exists
    const [existing] = await getProjectByIdModel(id);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    await deleteProjectModel(id);
    res.status(200).json({ 
      message: "Project deleted successfully",
      id 
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ 
      message: "Failed to delete project",
      error: error.message 
    });
  }
};