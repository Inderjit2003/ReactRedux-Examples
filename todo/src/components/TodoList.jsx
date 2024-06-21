import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/action";
import Button from 'react-bootstrap/Button';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
         <span className='fw-semibold fs-4 mx-2 me-5'>{todo.text}</span> 
          <Button variant='primary' className='ms-5' onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? "Undo" : "Complete"}
          </Button>
          <Button variant='primary' className='mx-2' onClick={() => dispatch(removeTodo(todo.id))}>Remove</Button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
