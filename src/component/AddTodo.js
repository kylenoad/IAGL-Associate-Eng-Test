import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task });
    setTask("");
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
