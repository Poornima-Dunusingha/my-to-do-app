import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "../types";
import { ToggleComplete } from "../types";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
