import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = "todoApp.todos";

  //this useeffect for load components
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (store) return setTodos(store);
  }, []);

  //everytime if things changes we call this fn, and save our array of todo
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]; //creating copy of state
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleAddTodo = (e) => {
    const name = (todoNameRef.current.value).trim();
    if (name === "") return;
    // console.log(name);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now(), name: name, complete: false }]; //with previous array of todo printing new array also
    });
    todoNameRef.current.value = null;
  };


  const handleClearTodo = () =>{
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <div className="app">
        <h1 className="title">Todo App</h1>
        <input ref={todoNameRef} type="text" name="todo" id="" />
        <button type="button" className="btn btn-1" onClick={handleAddTodo}>
          Add Todo
        </button>
        <button type="button" className="btn btn-2" onClick={handleClearTodo}>
          Clear Complete
        </button>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <p className="lefttodo">{todos.filter(todo => !todo.complete).length} left Todo</p>
    </div>
  );
}

export default App;
