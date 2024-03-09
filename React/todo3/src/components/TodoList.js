import React from 'react';
import TodoItem from './TodoItem';

//할일의 목록들을 담고 있는 TodoList


function TodoList({todos, onCheckToggle, onInsertToggle,setSelectedTodo}) {
//인자로 받는 거 : 객체형태자료, 체크여부 토글함수, 할일입력모달창 함수, 할일선택 state
  return (
    <div className='TodoList'>
        {todos.map(todo =>(
        <TodoItem 
        todo={todo} //객체 형태 자료 todo.  (id,text , 체크여부)
        key={todo.id} //todo의 id -> 콘솔로그의 오류방지를 위해 씀
        onCheckToggle={onCheckToggle} //체크박스 완료, 미완료 함수
        onInsertToggle={onInsertToggle} //모달창(할일입력) 토글함수
        setSelectedTodo={setSelectedTodo} 
        //현재 선택된 할일 나타내는 state함수. 이거 안쓰면 중복선택 될수도 있음.
        />) )}
    </div>
  )
}

export default TodoList;