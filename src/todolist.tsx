import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import { AddTodo, ToggleComplete } from "./types";
import { Todo } from "./types";
import { TodoList } from "./components/TodoList";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="main">
      <div className="App">
        {/* <TodoHome /> */}
        <h1 className="topic">Add New Tasks</h1>
        <p className="date">Tuesday 25th July 2023</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default TodoApp;
