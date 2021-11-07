import React from "react"
import TodoList from "./TodoList";

const ToogleListItem = (props)=>{
    const todoItems = props.todo;
    const toggleList = props.toggle;//toggleList is a function

    const handleToggle = ()=>{
        toggleList(todoItems.id);
    }
    return(
        <div>
           <label>
                <input type="checkbox" checked={todoItems.completed} onChange={handleToggle}/>
                
                {todoItems.name}
           </label>
        </div>
    )
}
export default ToogleListItem;