import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queyString from "query-string";
import MessagingArea from "./messagingArea/MessagingArea";

let socket;
export default function Room({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const { name, room } = queyString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io("http://localhost:5000");
    socket.emit("join", { name, room }, ({ error }) => {
      window.location.href = "/";
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
      return () => {
        socket.emit("disconnect");
      };
    });
  }, [messages]);
  const sendMessage = (e) => {
    socket.emit("sendMessage", message, ({ error }) => {
      window.location.href = "/";
    });
    setMessage("");
    const input = document.querySelector("input");
    input.focus();
  };
  return (
    <div>
      <MessagingArea
        name={name}
        room={room}
        messages={messages}
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
      />
    </div>
  );
}
