import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, onCheckToggle, onInsertToggle,setSelectedTodo}) {
  return (
    <div className='TodoList'>
        {todos.map(todo =>(
        <TodoItem 
        todo={todo} 
        key={todo.id} 
        onCheckToggle={onCheckToggle} 
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}/>) )}
    </div>
  )
}

export default TodoList;