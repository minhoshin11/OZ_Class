import React from "react";

function TodoBoard(props){
    return(
        <div>
            {props.todoList.map(function(item, i){
            return(
                <div className="todo-item" key={i}>
                    <input type="checkbox"  checked={item.completed}
                        onChange={() => props.toggleComplete(item.id)} />
                    
                    {item}
                    
                    <label  style={{ display: "inline-block", marginLeft: "10px", 
                    textDecoration: item.completed ? "line-through" : "none" }}>
                    {item.text}
                    </label>

                    <button onClick={() => props.deleteItem(item.id)}>삭제</button>
                </div>
            )})
            }
            
        </div>
    )
}

export default TodoBoard;