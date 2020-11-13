const http = require("http");
const { on } = require("process");
const { Socket } = require("socket.io");
const app = require("express")();
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
  //socket.to(socket.room).on("message",()=>{

  // })
  console.log("connection has been started");
  socket.on("newUser", (data) => {});
});
server.listen(PORT, () => {
  console.log("listening has been started ....");
});
