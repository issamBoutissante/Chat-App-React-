import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { io } from "socket.io-client";
import LogInPage from "./Components/LogInPage/LogInPage";
import Room from "./Components/Room/Room";

let socket;

export default function App() {
  socket = io("localhost:5000");
  return (
    <Router>
      <Route path="/" exact>
        <LogInPage></LogInPage>
      </Route>
      <Route path="/room">
        <Room></Room>
      </Route>
    </Router>
  );
}
