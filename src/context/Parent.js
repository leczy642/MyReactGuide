//the code below illustrates how to pass data from parent to child components
//using useContext hook.
//the main difference between context and props is the contexts avoids what is known as “prop drilling”. -> think about an actual drill.
//it allows a parent component to pass state data directly to any of it's child components without the need to pass
//thtough other components.
//1->2->3->4
//using props data cannot be passed directly from 1 to 4. it has to pass through 2 and 3.
//using context data can be passed directly from 1 to 4 without passing through 2 and 3.
//it also prevents 
import React, {useState, createContext} from "react";
import Child1 from "./childrenWithoutuseContext/Child1";
import ContextChild1 from "./childrenWithuseContext/ContextChild1";

//import '../../App.css';

//1. create a context and assign it an initial value
//2. wrap the context provider around the component that should have access to the state.
//3 . in the context provider pass in the state into the value property to make the state accessible to all components wrapped
//inside the provider.

export const CountContext = createContext(0); //(1)

const Parent = () => {
  const [count, setCount] = useState(0);

  function counter(){
      setCount(count + 1);
  }
  return (
    //all the components inside the CountContext provider will have access to the count state/variable
    <CountContext.Provider value={count}>{/**(2)and(3)*/}
        <ContextChild1/>
        <h1>{count}</h1>
        <button onClick={counter}>click me</button>
        <p>Parent</p>
    </CountContext.Provider>
  );
}
export default Parent;

//This code snippet illustrates how to pass data down to a component using props
//to make this code work simply comment the code snippet above and uncomment the code snippet below

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   function counter(){
//       setCount(count + 1);
//   }
//   return (
//     <div>
//         <Child1 count={count}/>
//         <h1>{count}</h1>
//         <button onClick={counter}>click me</button>
//         <p>Parent</p>
//     </div>
//   );
// }
// export default Parent;

//setting up context 
//in the parent component
//const MyContext = React.createContext(defaultValue);
//<MyContext.Provider value={valueToPass}>
// <ChildComponent/>
//</MyContext.Provider>

//in the child component 
//import { useContext } from 'react';
//import {MyContext} from 'YourParentComponent';
//const variableToHoldData = useContext(MyContext);