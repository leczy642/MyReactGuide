import React from "react";
import ToogleListItem from "./ToogleListItem";

const TodoList = (props) =>{
    const todoItems = props.todoListItems;
    const toggleList = props.onToggle;
    return(
        <div>
            <ul>
                {todoItems.map(todo =>{
                    //return<li key={todo.id} toggle={toggleList}>{todo.name}</li>;
                    return <ToogleListItem key={todo.id} todo={todo} toggle={toggleList}/>
                })}
            </ul>
        </div>
    );
}

export default TodoList;