import React, { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState(''); //들어오는 값
  const [todoList,setTodoList] = useState([]); //아이템 저장소
  
  
  const newItem = {
    id : Math.random(),
    text : inputValue
  }

  const addItem = () =>{
    console.log("아이템 추가합니다~" , inputValue)
    if(inputValue.trim() !== ''){
      const newItem = {
        id: Math.random(),
        text: inputValue,
        completed: false
    }
    setTodoList([inputValue , ...todoList]) //새로운 거,기존에 있던 것 합치기
    setInputValue(''); // 입력값 초기화
  }
};
  
  const deleteItem = (id) => {
    const deleteList = todoList.filter(item => item.id !== id);
    setTodoList(deleteList);
  };

  const toggleComplete = (id) => {
    const updatedList = todoList.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(updatedList);
  };




  return (
    <div className="App">
     <h1>Todo List</h1>
     <input value={inputValue} onChange={(e)=>{
      setInputValue(e.target.value)
     }}/>
     {/* input에 값을 저장하는 코드 */}
     <button onClick={addItem}>추가</button>
    
     <TodoBoard todoList={todoList} deleteItem={deleteItem} 
        toggleComplete={toggleComplete} />

    </div>
  );
}

export default App;
