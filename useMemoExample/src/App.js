//this programme illustrates the use of useMemo hook
//which is used to memoize expensive computations
//it is used to speed up slow functions by caching their results
//Using the useMemo hook, a function that is cached is only called when value/dependencies change
import React, {useState, useMemo} from "react";

function App() {
  const [num, setNum] = useState(0);
  
  //using useMemo which cache the result of slowFunction function
  //we only call slowFunction when num changes
  //num is the dependency
  const doubleNum = useMemo(() =>{
    return slowFunction(num);
  }, [num]);
  
  //const doubleNum = slowFunction(num);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }


  
  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={e => setDark(prevDark => !prevDark)}>change color</button>
      <div style={themeStyle}>{doubleNum}</div>
    </div>
  );
}

//we'll define a slow function which we'll use to simulate a slow network request
//we intend to speed up this function using memoization
function slowFunction(num){
  console.log("calling slow function");
  for(let i = 0; i <= 1000000000; i++){}
  return num * 2;
}
export default App;
