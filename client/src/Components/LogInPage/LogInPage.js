import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttom from "../Room/messagingArea/Layout/MyButton/MyButton";
import Text from "../Room/messagingArea/Layout/MyTextInput/MyTextInput";

export default function LogInPage() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div>
      <Text
        placeholder="Enter Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Text
        placeholder="Enter The room You Want To Join"
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />

      <Link
        onClick={(e) => {
          if (!name || !room) {
            e.preventDefault();
          }
          setRoom("");
          setName("");
        }}
        to={`/room?name=${name}&room=${room}`}
      >
        <Buttom>Join</Buttom>
      </Link>
    </div>
  );
}
