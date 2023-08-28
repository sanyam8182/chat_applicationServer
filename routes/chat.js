import express from "express";
import {
  createChatRoom,
  getChatRooms,
  storeMessage,
  getMessagesForRoom,
  getChatRoom,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/createChatRoom", createChatRoom);
router.get("/getChatRooms/", getChatRooms);
router.post("/getChatRoom/", getChatRoom);
router.post("/store-message", storeMessage);
router.post("/get-messages/", getMessagesForRoom);

export default router;
