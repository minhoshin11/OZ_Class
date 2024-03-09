import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiPencil, TiTrash } from 'react-icons/ti';

//Todo 기입하는 것들

function TodoInsert({ onInsertToggle, onInsertTodo , selectedTodo , onRemove , onUpdate}) {
//인자로 받는 것들 :     모달창(할일입력)함수, 새로운할일추가함수, 현재선택한할일state, 삭제함수 , 업데이트함수
    const [value, setValue] = useState("");
    //입력된 text를 나타내는 state. 초기값은 문자열 공백임.
    const onChange = (e) => {
    setValue(e.target.value);
    //text값이 변경될 떄마다 입력한 value(값)을 업데이트 함.
  }

//form 제출 이벤트 핸들러.
  const onSubmit = (e) => {
    e.preventDefault();
    //e.preventDefault( : 이벤트버블링(상위요소까지 클릭)을 막는 것
    onInsertTodo(value);
    //새로운할일추가 함수(text값)
    setValue("");
    //text칸을 초기화 시킴. 안시키면 전에 입력했던 거 그대로 나옴
    onInsertToggle();
    //모달창 닫기!
  }

  useEffect(()=>{
//useEffect : 함수컴포넌트가 랜더링 될 떄마다 특정작업 수행.(selectedTodo : 선택된 할일)

    if(selectedTodo){
      //할일리스트(기존꺼) 열었다면
        setValue(selectedTodo.text);
      //text의 state변경함수(Todo.Text) 바꿀게.
    } 
  },[selectedTodo]);
  //[selectedTodo]
  //useEffect가 오직 selectedTodo의 값이 변경될 때만 실행된다는 것
  return (
    <div className='background'>
      <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id,value)} : onSubmit}
      //서버 없어서 안쓰는 코드.
      //사용자가 폼을 제출할 때, 서버에 정보를 제출하는 코드
      //선택된 할 일이 있는 경우 해당 할 일(text)을 업데이트하고, 
      //선택된 할 일이 없는 경우에는 그냥 제출
      >
        <input 
          placeholder='please type'
          value={value} //모달창에 text값
          onChange={onChange} // text값 이벤트핸들러
        />
        {selectedTodo ? ( //할일을 선택한다면 ? 수정버튼,삭제버튼 보여줘.
                          //선택 안한다면 할일추가 버튼(플러스버튼) 보여줘. 
            <div className='rewrite'>
                <TiPencil onClick={() => onUpdate(selectedTodo.id,value)}/>
                <TiTrash onClick={() => onRemove(selectedTodo.id)} />
            </div>
        ) : (
        
              <button type='submit'>
              <MdAddCircle //플러스 버튼임.
              />
            </button> )}
            <button className='xButton' onClick={onInsertToggle}> x </button>
      </form>
    </div>
  );
}

export default TodoInsert;
