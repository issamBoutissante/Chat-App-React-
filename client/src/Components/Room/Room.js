import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queyString from "query-string";

let socket;
export default function Room({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = queyString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io("http://localhost:5000");
  }, [location.search]);
  return (
    <div>
      <h1>Hello</h1>
      <ul></ul>
      <input type="text" />
    </div>
  );
}
