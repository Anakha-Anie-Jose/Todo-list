import React from "react";
import "./style.css";

export default function App() {
const todos=["Do Something", "Study React", "Do Project"];
  return (
    <div>
    <ul>
      {todos.map(todo => {
        return<h1> <li><i><u>{todo}</u></i></li></h1>
      })}
      </ul>
          </div>
  );
}
