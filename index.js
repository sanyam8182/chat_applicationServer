import { createServer } from "http";
import express from "express";
import configureSockets from "./socket.js";
import authRouter from "./routes/auth.js";
import chatRouter from "./routes/chat.js";
import userRouter from "./routes/users.js";
import cors from "cors";

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 3000;

// Use CORS middleware to allow requests from all origins
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.use("/user", userRouter);
configureSockets(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
