const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  // to current user only
  socket.emit("message", "Welcome to PJ Chat");

  // to everyone except the user
  socket.broadcast.emit("message", "A user has joined the chat");

  socket.on("disconnect", () => {
    // to everyone
    io.emit("message", "A user has left the chat");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
