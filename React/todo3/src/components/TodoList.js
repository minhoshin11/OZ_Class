import React from 'react';
import TodoItem from './TodoItem';

//할일의 목록들을 담고 있는 TodoList
//

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