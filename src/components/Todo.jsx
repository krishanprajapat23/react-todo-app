import React from "react";
export default function TodoList({ todo, toggleTodo }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <>
    <li key={todo} className="list-item">
      <input
        className="styled-checkbox" 
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
        name={todo.name}
        id={todo.id}
      />
      <label htmlFor={todo.id}>{todo.name}</label>
    </li>
    </>
  );
}
