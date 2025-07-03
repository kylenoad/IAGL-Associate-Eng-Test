import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import AddTodo from "./component/AddTodo"

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}