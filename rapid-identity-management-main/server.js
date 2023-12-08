// app.js
const express = require("express");
const app = express();
const port = 5005;

// Define a simple API endpoint
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello, this is your first API!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
