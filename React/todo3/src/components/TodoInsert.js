import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiPencil, TiTrash } from 'react-icons/ti';

//Todo 기입하는 것들

function TodoInsert({ onInsertToggle, onInsertTodo , selectedTodo , onRemove , onUpdate}) {
    const [value, setValue] = useState("");
    const onChange = (e) => {
    
    setValue(e.target.value);
  }
//e.preventDefault( : 이벤트버블링(상위요소까지 클릭)을 막는 것
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  }

  useEffect(()=>{
    if(selectedTodo){
        setValue(selectedTodo.text);
    }
  },[selectedTodo]);
  return (
    <div className='background'>
      <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id,value)} : onSubmit}>
        <input 
          placeholder='please type'
          value={value} 
          onChange={onChange} 
        />
        {selectedTodo ? (
            <div className='rewrite'>
                <TiPencil onClick={() => onUpdate(selectedTodo.id,value)}/>
                <TiTrash onClick={() => onRemove(selectedTodo.id)} />
            </div>
        ) : (<button type='submit'>
          <MdAddCircle />
        </button> )}
        <button className='xButton' onClick={onInsertToggle}> x </button>
      </form>
    </div>
  );
}

export default TodoInsert;
