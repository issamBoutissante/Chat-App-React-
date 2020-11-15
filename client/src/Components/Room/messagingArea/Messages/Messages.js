import React, { useState } from "react";

export default function Messages({ messages, name }) {
  return (
    <>
      <ul className="messages">
        {messages.map((mes, index) => {
          return (
            <li
              className={
                mes.userName === name ? "UserMessageStyle" : "messageStyle"
              }
              key={index}
            >
              {mes.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}
