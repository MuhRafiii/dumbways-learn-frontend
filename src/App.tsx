import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  // Dummy Data
  const todos = [
    { id: 1, title: "List Pertama", completed: false },
    { id: 2, title: "List Kedua", completed: false },
    { id: 3, title: "List Ketiga", completed: false },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
