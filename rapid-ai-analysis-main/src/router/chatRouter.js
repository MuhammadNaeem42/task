import chatController from "../controller/chatController.js";
import express from "express";

const router = express.Router();
// Managing chat history.
// This is for storing chats history
router.post("/chats", chatController.createChat);
router.get("/chats", chatController.getAllChats);
router.put("/chats/:id", chatController.updateChat);
router.delete("/chats/:id", chatController.deleteChat);
router.get("/chats/:id", chatController.getChatById);

// Chat with a bot
// This is only for chatting with the engine and getting back the response. it doesnt store the responses.
router.post("/general-engine", chatController.generalEngineChat);
router.post("/clarify-engine", chatController.clarifyEngineChat);

export default router;
