
import React, {useState, useMemo, useCallback} from "react";
import DisplayNum from "./DisplayNum";

function App() {
  const [num, setNum] = useState(0);
 

  
  
  // const doubleNum = useMemo(() =>{
  //   return slowFunction(num);
  //}, [num]);

  // function showNumber(){
  //   //console.log("calling showNumber function");
  //   return num;
  // }
  const trippleNumber = useCallback(()=>{
    return num * 3;
  }, [num]);
  
  
  const doubleNum = slowFunction(num);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }


  
  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={e => setDark(prevDark => !prevDark)}>change color</button>
      <div style={themeStyle}>Double Number : {doubleNum}</div>
      <DisplayNum displayNum = {trippleNumber}/>
    </div>
  );
}

//we'll define a slow function which we'll use to simulate a slow network request
//we intend to speed up this function using memoization
function slowFunction(num){
  //console.log("calling slow function");
  for(let i = 0; i <= 1000000000; i++){}
  return num * 2;
}
export default App;
