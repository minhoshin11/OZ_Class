import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    const todo = {
      id: nextId,
      text: text,
      checked: false,
    };
    setTodos((todos) => [...todos, todo]);
    nextId++;
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-bottom" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} />
      )}
    </Template>
  );
}

export default App;
