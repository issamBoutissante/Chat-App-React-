import React from "react";
import "./index.css";
import Layout from "./Layout/Layout";
import Messages from "./Messages/Messages";

const MessaginArea = ({
  name,
  room,
  messages,
  setMessage,
  message,
  sendMessage,
}) => {
  return (
    <Layout>
      <header>
        <span className="name">{name}</span>
        <span className="room">{room}</span>
        <span className="close">Close</span>
      </header>
      <form>
        <section className="messages_area" style={{ overflow: "scroll" }}>
          <Messages messages={messages} />
        </section>
        <section className="writing_messages_area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
          />
          <span onClick={sendMessage}>Send</span>
        </section>
      </form>
    </Layout>
  );
};

export default MessaginArea;
