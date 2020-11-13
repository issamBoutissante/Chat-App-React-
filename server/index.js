const http = require("http");
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
io.on("connection", () => {
  console.log("connection has been started");
});
server.listen("5000", () => {
  console.log("listening has been started ....");
});
