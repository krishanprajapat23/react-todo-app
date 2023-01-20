import React from "react";

export default function TodoList({ todo, toggleTodo }) {
  const handleTodoClick = () =>{
    toggleTodo(todo.id);
  }
  return (
    <>
      <li key={todo}>
        <label htmlFor={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleTodoClick}
            name={todo.name}
            id={todo.id}
          />
          {todo.name}
        </label>
      </li>
    </>
  );
}
