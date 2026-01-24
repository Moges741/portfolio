// import express from "express";
// import { getProjects, addProject } from "../controllers/projectController.js";

// const router = express.Router();

// router.get("/", getProjects);
// router.post("/", addProject);

// export default router;

import express from "express";
import { 
  getProjects, 
  addProject,
  getProjectById,
  updateProject,
  deleteProject 
} from "../controllers/projectController.js";

const router = express.Router();

// GET all projects
router.get("/", getProjects);

// GET single project
router.get("/:id", getProjectById);

// POST create project
router.post("/", addProject);

// PUT update project
router.put("/:id", updateProject);

// DELETE project
router.delete("/:id", deleteProject);

export default router;