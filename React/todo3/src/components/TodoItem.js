import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

//TodoItem : 목록 하나의 아이템을 담당하는 TodoItem
//박스 체크했을 때 , 체크해제했을 때와 컨텐츠 내용

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