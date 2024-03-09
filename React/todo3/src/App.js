import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

let nextId = 4;
//새로운 할일의 id를 생성하기 위해 만듬.
//기존 id가 3개까지 있기 때문
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  //현재 선택된 할일을 나타냄.
  const [insertToggle,setInsertToggle] = useState(false);
  //할 일을 추가할 때 나타나는 인서트창 관리.
  const [todos, setTodos] = useState([
  //실제 할일 목록을 배열로 관리
    {
      id: 1, 
      text : "할일 1",
      checked : true
    } ,
    {
      id:  2, 
      text : "할일 2",
      checked : false
    } , 
    {
      id: 3, 
      text : "할일 3",
      checked : true
    }
  ]);

// onInsertToggle :  할일 입력 모달창 토글
  const onInsertToggle = () => {
    if(selectedTodo){
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev) }
//새로운 할일을 추가할 때 , 기존에 선택된 할일이 있을 수 있으니
//만약 할일을 눌렀으면 선택된 할 일을 초기화 함.
//setInsertToggle : true 면 false , false면 true 이런식임.


    //onInsertTodo: 새로운 할 일을 추가합니다.
  const onInsertTodo = (text) => {
    if (text === ''){
      return alert('할 일을 입력해주세요');
    } else{
      const todo = {
        id :  nextId ,
        text,
        checked : false
      };
      setTodos(todos => todos.concat(todo));
      //concat : todos 배열에 todo인자를 추가하겠다는 메소드
      nextId++; // 다음 id 값 생성
    }
  }

  //할 일의 완료/미완료 상태를 변경하는 함수
  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };
  //특정 id를 받아와서 checked 속성을 toggle함.
  //setTodos : 새로운 할일 목록을 설정. 이전상태 가져오고 새로운 배열을 반환함.
  //todos.map : 기존의 할일 목록을 순회하면서 각 할 일을 새로운 값으로 반환
  //todo.id랑 특정한 id가 같냐? 같을 경우 checked만 todo상태 반대로 해.
  //아닐 경우 걍 todo상태 유지해.


  //선택된 할 일을 변경하는 함수
  //이 함수는 새로운 선택된 할 일을 받아와서 selectedTodo(눌러진Todo목록) 상태를 업데이트
  const onChangeSelectedTodo = (todo) =>{
    setSelectedTodo(todo)
  } 

  //할일 삭제하는 함수
  const onRemove = id =>{
    onInsertToggle();
    setTodos(todos => todos.filter(todo=> todo.id !== id))
  };
//id를 인자로 받아 , 
//onInsertToggle상태 변경 -> Insert창 꺼짐
//setTodos(배열정보 설정) ~ -> 인자인 todo의 id는 id가 아니다! (삭제)

//할일 업데이트 하는 함수
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo,text} : todo ))
  }
//Insert창 꺼짐
//setTodos(배열정보 설정) ~ -> todo.id가 id가 맞을 경우 :
// 기존 todo벗겨내고 todo에서 text(할일내용)만 바꿔. 다 끝나면 그리고 다시 객체로 만들어
// : todo --> 주어진 id와 일치하지 않는 경우 기존 할 일 객체를 그대로 유지 함.


  return (
    <div className="App">
      <Template todoLength={todos.length}>
         {/* todo.length -> 오늘의 할일 (todo.length)  */}
      <TodoList  
        todos={todos} //할일 목록 배열 state
        onCheckToggle={onCheckToggle} // 체크박스 상태 변경
        onInsertToggle={onInsertToggle} // 할일 입력 모달창 상태,
        setSelectedTodo={setSelectedTodo}  //현재 선택된 할일을 나타냄.
        />

        <div className='add-todo-button' onClick={onInsertToggle}>
          {/* 플러스 버튼입니다 */}
          <MdAddCircle/>
        </div>
    {insertToggle && 
    //insertToggle && : 조건부 렌더링 -> 참일 때 밑에 꺼 보여줌
    //insertToggle이 트루이면 TodoInsert 컴포넌트 보여주세요~
      <TodoInsert
        selectedTodo={selectedTodo} //현재 선택한 할일
        onInsertToggle={onInsertToggle} //할일 입력 모달창 토글
        onInsertTodo={onInsertTodo} //새로운 할일 추가하는 함수
        onRemove={onRemove} //삭제하는 함수
        onUpdate={onUpdate} //수정하는 함수
      />
    }
      </Template>

    </div>
  );
}

export default App;