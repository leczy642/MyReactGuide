import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  
  //the proper way of declaring a variable react
  let [count, setCount] = useState(0);

  const increment =()=>{
    setCount(
      count+=1
    );
  }
  const decrement =()=>{
    setCount(
      count -=1
    );
  }
  return(
    <div>
      <p>The total count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
