import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function TodoItem({todo, onCheckToggle, onInsertToggle, setSelectedTodo }) {
    const {id, text , checked} = todo;
  return (
    <div className='TodoItem'>
        <div className={`content ${checked ? 'checked' : ''}`}>
            {checked ? 
            <MdCheckBox 
                onClick={() => {
                    onCheckToggle(id);
                }}/> : 
            <MdCheckBoxOutlineBlank 
                onClick={() => {
                    onCheckToggle(id);
            }}/>  }
            <div className='text' onClick={() => {
                setSelectedTodo(todo);
                onInsertToggle();
            }}>{text}</div>
        </div>    
    </div>
  )
}

export default TodoItem;