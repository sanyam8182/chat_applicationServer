import pool from "../db.js";

const createChatRoom = async (req, res) => {
  try {
    const { users, is_private, name } = req.body;

    const result = await pool.query(
      "INSERT INTO chatrooms (users, is_private, name) VALUES ($1, $2, $3) RETURNING room_id, created_at, users, is_private, name",
      [users, is_private, name]
    );
    console.log("created: ", result.rows);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getChatRooms = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM chatrooms");
    console.log(result);
    const chatRooms = result.rows;

    res.status(200).json(chatRooms);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getChatRoom = async (req, res) => {
  try {
    console.log("Request for chat room: ", req.body);
    const { username } = req.body;
    const result = await pool.query(
      "SELECT * FROM chatrooms WHERE is_private = true AND $1 = ANY(users) ",
      [username]
    );

    const chatRooms = result.rows;

    res.status(200).json(chatRooms);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const storeMessage = async (req, res) => {
  try {
    const { room_id, message, sender } = req.body;
    await pool.query(
      "INSERT INTO messages (room_id, message, sender) VALUES ($1, $2, $3)",
      [room_id, message, sender]
    );
    res.status(201).json({ message: "Message stored successfully" });
  } catch (error) {
    console.error("Error storing message:", error);
    res.status(500).json({ error: "Message storage failed" });
  }
};

const getMessagesForRoom = async (req, res) => {
  try {
    const { room_id } = req.body;
    const result = await pool.query(
      "SELECT * FROM messages WHERE room_id = $1 ORDER BY created_at ASC",
      [room_id]
    );
    const messages = result.rows;
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

export {
  createChatRoom,
  getChatRooms,
  storeMessage,
  getMessagesForRoom,
  getChatRoom,
};
