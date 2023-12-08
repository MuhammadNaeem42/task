const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

app.use(cors());

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use("/api/projects", require("./routes/projectRoutes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(`Project management microservice is running on ${PORT}`)
);
