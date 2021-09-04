import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const TODO_LIST = [{id:1, name: 'item1', completed: false},
                     {id:2, name: 'item2', completed: false}];

  const [todoListItems, setTodo] = useState(TODO_LIST);
  const todoNameRef = useRef();
  const todoUpdateRef = useRef();
  
  //ADDING A NEW TODO FUNCTION
  function addTodoHandler(e){
  //reference the todo input field
  const todoName = todoNameRef.current.value;
  
    //stop function execution if an empty string is entered in the input string
    if(todoName === '') return
    
    //setTodo function is called to add a new todo
    //...prevTodos - is a copy of the previous todos
    //...todoName is the value of the to do input field
    //which contains a new todo
    setTodo(prevTodos =>{
      return [...prevTodos, {id:uuidv4(), name:todoName, completed: false}];
    });

    //empty the input field afte submission
    todoNameRef.current.value = null;
  }
  
  //UPDATE THE VALUE OF TODO
  function addToggleHandler(id){
    const todoName = todoNameRef.current.value;
    //grab a copy of the todos
   //const newTodos = [...todoListItems];
   const newTodos = [...todoListItems];

   //find the record/object where the todos.id = id
   //is the same as the value of the id entered
   //this would return the id, name and completed
   const todoCompleted = newTodos.find(todos => todos.id === id);

   //todo.completed selects the 'completed' property of the todo list
   //the statement below changes it to true or false depending on the value returned from todoCompleted
   todoCompleted.completed = !todoCompleted.completed;
   //todoCompleted.name = todoName;

   //update the state with the new values
   setTodo(newTodos);
  }
  
  //DELETING A TODO
  function addRemoveHandler(){
   //this deletes the record where completed: false
   //it filters all our todos for the ones that are not complete
   const todoToDelete = todoListItems.filter(todo => !todo.completed);
   //set our new todo list with the ones that are not complete
   setTodo(todoToDelete);
  }

  //UPDATE A TODO
  function addUpdateHandler(){
    //filter the todo list where completed is false
    const todoUpdated2 = todoListItems.filter(todos => !todos.completed);

    //if the length of the elements that are false is the same as the length of the elements
    //in the todo list, it means no item has been selected
    //this prevents the type error I got by clicking on the update button
    //without selecting a checkbox
    //and prevents the form updating with an empty value
    if (todoUpdated2.length === todoListItems.length || todoUpdateRef.current.value === '') return

    const todoUpdateName = todoUpdateRef.current.value;

   // if(todoUpdated2.length != todoListItems.length && todoUpdateName === null) return
    //grab a copy of the todos
   //const newTodos = [...todoListItems];
   const newTodos = [...todoListItems];

   //find the record/object where the todos.id = id
   //is the same as the value of the id entered
   //this would return the id, name and completed
   const todoUpdated = newTodos.find(todos => todos.completed === true);

   //todo.completed selects the 'completed' property of the todo list
   //the statement below changes it to true or false depending on the value returned from todoCompleted
   //todoCompleted.completed = !todoCompleted.completed;
   todoUpdated.name = todoUpdateName;

   //update the state with the new values
   setTodo(newTodos);
   
   //empty the value of the update input field
   todoUpdateRef.current.value = ''
   }

  
  return (
   <div>
     <TodoList todo = {todoListItems} onToggle={addToggleHandler} />
     <input type ="text" ref={todoNameRef} placeholder="add a new todo"/>
     <input type ="text" ref={todoUpdateRef} placeholder="change a todo"/>
     <button onClick={addTodoHandler}>Add Todo</button>
     <button onClick={addRemoveHandler}>Remove Todo</button>
     <button onClick={addUpdateHandler}>Update Todo</button>
     <div>You have {todoListItems.filter(todo => !todo.completed).length} todos left</div>
     <div>Select a todo before changing it</div>
   </div>
  );
}

export default App;
