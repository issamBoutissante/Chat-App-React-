import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInPage from "./Components/LogInPage/LogInPage";
import Room from "./Components/Room/Room";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={LogInPage}></Route>
      <Route path="/room" component={Room}></Route>
    </Router>
  );
}
