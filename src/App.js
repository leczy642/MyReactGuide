//in this aplication we will use useReducer to add new items and remove items from a todoList
import React, {useState, useReducer, useRef} from "react";
import TodoList from "./TodoList";


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}
const defaultValue = [{id:Date.now(), name: 'item1', completed: false}];

function App() {
const [state, dispatch] = useReducer(reducer, defaultValue)
const TODO_LIST = [];

 const [todoListItems, setTodo] = useState(TODO_LIST);
 const todoNameRef = useRef();

 //console.log(state);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodoName = todoNameRef.current.value;
    const newTodo = {id: Date.now(), name: newTodoName, completed: false};
    setTodo([...todoListItems, newTodo]);
    dispatch({type: 'ADD_TODO', payload: newTodo});
    todoNameRef.current.value = '';
  }
  // const addItemToCartHandler = (item) => {
  //   dispatch({type: 'ADD', item: item});
  // };

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   const newTodoName = todoNameRef.current.value;
  //   const newTodo = {id: Date.now(), name: newTodoName, completed: false};
  //   dispatch({type: 'ADD_TODO', payload: newTodo});
  //   todoNameRef.current.value = '';
  // }

  const removeTodo = () => {
    const deletedData = setTodo(todoListItems.filter(todo => !todo.completed));//return todo where completed is false
    dispatch({type: 'REMOVE_TODO', payload: deletedData});
  }

  const toggleTodo = (id) => {
    dispatch({type: 'TOGGLE_TODO', payload: id});
  }

  return (
    <div>
     <form onSubmit={addTodo} >
       <input type="text" ref={todoNameRef}/>
      </form>
      <TodoList todoListItems={todoListItems} onToggle ={toggleTodo}/>
      <button onClick={addTodo}>Add Todo</button>
     <button onClick={removeTodo}>Remove Todo</button>
    </div>
  );
}


export default App;

//Body of useReducer
// const [state, dispatch] = useReducer(reducer, defaultValue)

//purpose of useReducer is to manage the state of the application
//useReducer is a hook that takes a reducer and a default value
//useReducer returns an array of two values
//the first value is the state of the application
//the second value is a dispatch function
//dispatch function is used to dispatch actions to the reducer
//the reducer is a function that takes the current state and an action
//the reducer returns the new state
//the reducer is responsible for managing the state of the application

//reducer function
//const reducer = (state, action) => {
//  switch (action.type) {
//    case 'FIRST_CASE':
//      ..do something
//    case 'SECOND_CASE':
//      ..do something
//    default:
//      return state;
//}
//}

