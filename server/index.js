const http = require("http");
const { emit } = require("process");
const { Socket } = require("socket.io");
const app = require("express")();
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./manageUsers");
const server = http.createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const PORT = process.env.PORT || "5000";
io.on("connection", (socket) => {
  socket.on("join", ({ room, name }, callback) => {
    const { error, user } = addUser({ id: socket.id, room, name });
    if (error) {
      callback({ error });
      return;
    }
    socket.emit("message", {
      userName: "everyBody",
      text: `hello ${user.name} ,you are welcome in our group 💙`,
    });
    socket.join(user.room);
    socket.broadcast.to(user.room).emit("message", {
      userName: user.name,
      text: `${user.name} has been joind the group`,
    });
  });
  socket.on("sendMessage", (message, callback) => {
    const { user, error } = getUser(socket.id);
    if (error) return callback({ error });
    io.to(user.room).emit("message", { userName: user.name, text: message });
  });
  socket.on("disconnect", () => {
    const { user, error } = getUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        userName: user.name,
        text: `${user.name} has left the group`,
      });
      socket.leave(user.room);
      removeUser(socket.id);
    }
  });
});
server.listen(PORT, () => {
  console.log("listening has been started ....");
});
