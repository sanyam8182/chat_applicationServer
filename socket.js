import { Server } from "socket.io";

const configureSockets = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-room", (room_id) => {
      console.log("User joined to: ", room_id);
      socket.join(room_id);
    });

    socket.on("send-message", ({ room_id, message }) => {
      io.to(room_id).emit("message", message);
      console.log("message received: ", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

export default configureSockets;
