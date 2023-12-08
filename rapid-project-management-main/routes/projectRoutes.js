const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Create Project
router.post("/createProject", async (req, res) => {
  const { projectType, data } = req.body;
  try {
    let projectData;

    if (projectType === "Solution") {
      projectData = new SolutionSchema(data);
    } else if (projectType === "Design Thinking") {
      projectData = new DesignThinkingSchema(data);
    } else {
      return res.status(400).send("Invalid project type");
    }

    let project = new Project({
      projectType,
      data: projectData,
    });

    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Update Project
router.put("/updateProject/:id", async (req, res) => {
  const updateData = req.body;

  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Update fields based on project type
    if (project.projectType === "Solution") {
      if (updateData.name) project.data.name = updateData.name;
      if (updateData.description)
        project.data.description = updateData.description;
      if (updateData.dbUri) project.data.dbUri = updateData.dbUri;
      // Similar checks and updates for other fields...
    } else if (project.projectType === "Design Thinking") {
      if (updateData.empathyMap)
        project.data.empathyMap = updateData.empathyMap;
      // Similar checks and updates for other fields...
    } else {
      return res.status(400).send("Invalid project type");
    }

    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
