import { useState } from "react";
import "./App.css";

const toDoList = [
  { id: 1, title: "아침밥먹기", content: "500kcal 든든히 먹기" },
  { id: 2, title: "점심밥먹기", content: "700kcal 든든히 먹기" },
  { id: 3, title: "저녁밥먹기", content: "400kcal 든든히 먹기" },
  { id: 4, title: "야식 먹기", content: "1000kcal 든든히 먹기" },
];

function App() {
  const someThing = useState(toDoList)
  someThing[0]


  const handleClickAdd = () => {
      
      toDoList.push(newToDo)
    }
  };

  return (
    <div>
      <h1>할일목록</h1>
      <hr />

      <input placeholder="title" />
      <textarea placeholder="content" />
      <button>추가하기</button>
      <hr />
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id}>
            <div>{toDo.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
