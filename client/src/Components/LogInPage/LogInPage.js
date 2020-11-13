import React, { useState } from "react";

export default function LogInPage() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <label>name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>room:</label>
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button
        onClick={(e) => {
          setRoom("");
          setName("");
        }}
      >
        Go
      </button>
    </div>
  );
}
