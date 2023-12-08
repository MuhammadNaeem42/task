const mongoose = require("mongoose");

const SolutionSchema = new mongoose.Schema({
  projectType: String,
  name: String,
  description: String,
  dbUri: String,
  swortAnalysis: {
    strength: [String],
    weakness: [String],
    opportunity: [String],
    threats: [String],
  },
  uniqueInsight: String,
  modules: [
    {
      moduleName: String,
      features: [String],
    },
  ],
});

const DesignThinkingSchema = new mongoose.Schema({
  projectType: String,
  name: String,
  description: String,
  dbUri: String,
  empathyMap: {
    says: [String],
    thinks: [String],
    does: [String],
    feels: [String],
  },
  journeyChart: {
    stages: [
      {
        stageName: String,
        actions: [String],
        touchpoints: [String],
        emotions: [String],
      },
    ],
    goals: String,
  },
  vignettesData: {
    bigIdea: String,
    vignettes: [
      {
        title: String,
        description: String,
        keyPoints: [String],
      },
    ],
  },
  chartPreferences: {
    layout: String,
    colorScheme: String,
    illustrationStyle: String,
  },
  additionalInstructions: String,
  prioritizationGridData: {
    criteria: [String],
    options: [String],
  },
});

const ProjectSchema = new mongoose.Schema({
  projectType: {
    type: String,
    required: true,
    enum: ["Solution", "Design Thinking"],
  },
  data: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("Project", ProjectSchema);
