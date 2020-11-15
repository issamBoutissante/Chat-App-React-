import React from "react";
import ReactScrollDown from "react-scroll-down";

export default function Messages({ messages }) {
  return (
    <ul className="messages">
      {messages.map((mes, index) => {
        return (
          <li className="messageStyle" key={index}>
            {mes.text}
          </li>
        );
      })}
    </ul>
  );
}
