import React from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div>
      <center className='my-4'>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    </center>
  </div>
  )
}
