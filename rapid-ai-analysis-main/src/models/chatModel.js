import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  content: { type: String, required: true },
});

const chatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chats: [roleSchema],
});

export default mongoose.model("Chat", chatSchema);
