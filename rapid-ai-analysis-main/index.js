import mongoose from "mongoose";
import app from "./app.js";
// MongoDB connection
mongoose.connect(
  "mongodb+srv://bucibot:12345@cluster0.eacnios.mongodb.net/ai-service?retryWrites=true&w=majority",
  {}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Start server
const PORT = process.env.PORT || 5008;
app.listen(PORT, () => {
  console.log(`Rapid AI-Service is running on port ${PORT}`);
});
