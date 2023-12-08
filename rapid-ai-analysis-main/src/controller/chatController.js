import Chat from "../models/chatModel.js";
import engineConfigs from "../utils/engineConfigs.js";

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// General engine chat
// sample req.body
// {
//   "chatHistory": [],
//   "question": "Hi"
// }
const generalEngineChat = asyncHandler(async (req, res) => {
  try {
    const { question, chatHistory } = req.body;
    const result = await engineConfigs.generalEngine.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 400,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: "None",
      messages: [
        {
          role: "system",
          content:
            'You are a marketing writing assistant. You help come up with creative content ideas and content like marketing emails, blog posts, tweets, ad copy and product descriptions. You write in a friendly yet professional tone but can tailor your writing style that best works for a user-specified audience. If you do not know the answer to a question, respond by saying "I do not know the answer to your question."',
        },
        ...chatHistory,
        { role: "user", content: question },
      ],
    });

    res.status(200).json({
      status: "success",
      data: {
        output: result.data.choices[0].message,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Clarify engine chat
// sample req.body
// {
//   "chatHistory": [],
//   "question": "Hi"
// }
const clarifyEngineChat = asyncHandler(async (req, res) => {
  try {
    const { question, chatHistory } = req.body;
    const result = await engineConfigs.clarifyEngine.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 400,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: "None",
      messages: [
        {
          role: "system",
          content:
            "You are an Xbox customer support agent whose primary goal is to help users with issues they are experiencing with their Xbox devices. You are friendly and concise. You only provide factual answers to queries, and do not provide answers that are not related to Xbox.",
        },
        ...chatHistory,
        { role: "user", content: question },
      ],
      messages: [...chatHistory, { role: "user", content: question }],
    });

    res.status(200).json({
      status: "success",
      data: {
        output: result.data.choices[0].message,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Create a new chat
const createChat = asyncHandler(async (req, res) => {
  try {
    const newChat = new Chat({
      ...req.body,
    });

    await newChat.save();

    res.status(201).json({
      status: "success",
      data: {
        chat: newChat,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Read all chats
const getAllChats = asyncHandler(async (req, res) => {
  try {
    const chats = await Chat.find();

    res.status(200).json({
      status: "success",
      results: chats.length,
      data: {
        chats,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Update a chat by ID
const updateChat = asyncHandler(async (req, res) => {
  try {
    const chatId = req.params.id;

    const updatedChat = await Chat.findByIdAndUpdate(chatId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedChat) {
      return res.status(404).json({
        status: "fail",
        message: "No chat found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        chat: updatedChat,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Delete a chat by ID
const deleteChat = asyncHandler(async (req, res) => {
  try {
    const chatId = req.params.id;

    const chat = await Chat.findByIdAndDelete(chatId);

    if (!chat) {
      return res.status(404).json({
        status: "fail",
        message: "No chat found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: `Chat ${chatId} deleted`,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

// Get a chat by ID
const getChatById = asyncHandler(async (req, res) => {
  try {
    const chatId = req.params.id;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({
        status: "fail",
        message: "No chat found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        chat,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

const chatController = {
  createChat,
  getAllChats,
  deleteChat,
  updateChat,
  getChatById,
  generalEngineChat,
  clarifyEngineChat,
};

export default chatController;
