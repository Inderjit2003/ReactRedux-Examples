// src/components/AddTodo.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import Button from 'react-bootstrap/Button';

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <center >
    <form onSubmit={handleSubmit}>
    <div className="d-flex align-items-center">
          <input
            className="form-control my-4"
            style={{ width:'20%',marginLeft:'35%'}}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <Button variant="primary" className="mx-2" type="submit">Add Todo</Button>
        </div>
    </form>
    </center>
  );
};

export default AddTodo;
