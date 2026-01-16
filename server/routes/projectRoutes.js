import express from "express";
import { getProjects, addProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", addProject);

export default router;
