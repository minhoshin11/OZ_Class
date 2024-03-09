import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

//TodoItem : 목록 하나의 아이템을 담당하는 TodoItem
//박스 체크했을 때 , 체크해제했을 때와 컨텐츠 내용

function TodoItem({todo, onCheckToggle, onInsertToggle, setSelectedTodo }) {
//인자로 받는 것 : 단일 할일 , 체크박스토글함수,   할일 작성함수    , 선택된 할일 항목을 설정하는 함수
//단힐할일 todo는 id , text , checked를 포함하고 있음.
    const {id, text , checked} = todo;
  return (
    <div className='TodoItem'>
        <div className={`content ${checked ? 'checked' : ''}`}>
        {/* 체크가 되면 className = content checked , 아니면 content
        check 여부는 todo 안에 있음. */}

        {/* 형태 => check ? 체크박스 : 체크안된 박스 */}

            {checked ? 
            <MdCheckBox  //체크된 박스
                onClick={() => {
                    onCheckToggle(id); //체크여부 함수(인자는 id로)
                }}/> : 
            <MdCheckBoxOutlineBlank // 체크 안된 박스
                onClick={() => {
                    onCheckToggle(id);
            }}/>  }

            {/* text를 눌렀을 때 , 텍스트 내용 보여줌  */}
            <div className='text' onClick={() => {
                setSelectedTodo(todo); //선택된 할일 나타냄
                onInsertToggle(); //할일 모달창 토글 ,
                //밑에 todo의 text를 출력함.
            }}>{text}</div>
        </div>    
    </div>
  )
}

export default TodoItem;