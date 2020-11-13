import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LogInPage() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const onLogInHandler = () => {};
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
      <button>
        <Link
          to={`/room?name=${name}&room=${room}`}
          onClick={(e) => {
            setRoom("");
            setName("");
          }}
        >
          Go
        </Link>
      </button>
    </div>
  );
}
