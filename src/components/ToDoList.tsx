import React, { useState } from "react";
import "./components.css";

type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: TodoItem[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  // Local state untuk memanipulasi data
  const [todoList, setTodoList] = useState<TodoItem[]>(todos);

  const toggleCompleted = (id: number) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedList);
  };

  return (
    <div className="list">
      {todoList.map((todo) => (
        <div
          className={`${todo.completed ? "completed" : "todo-item"}`}
          key={todo.id}
          onClick={() => toggleCompleted(todo.id)}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
