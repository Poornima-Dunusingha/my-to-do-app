// import TodoHome from "./login";
import React, { useState } from "react";
import TodoApp from "./todolist";
import Login from "./login";
import SignUp from "./signup";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TodoApp" element={<TodoApp />} />
      </Router> */}

      <Login />
      <SignUp />
      <TodoApp />
    </div>
  );
}

export default App;
