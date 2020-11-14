import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queyString from "query-string";

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
      alert(error);
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (e.key !== "Enter") return;
    socket.emit("sendMessage", message);
    setMessage("");
  };
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {messages.map((mes, index) => {
          return <li key={index}>{mes.text}</li>;
        })}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={sendMessage}
      />
    </div>
  );
}
