//THE FOLLOWING PROGRAM ILLUSTRATES THE USEEFFECT HOOK
//to resize the browser window
//The useEffect hook is called after the component is rendered for the first time.
//the hook is called renders a side effect in response to changes in state input values.
//the useEffect takes in two parameters: a function and an array of dependencies.
//for example, useEffect(function, dependencies);
//eg useEffect(() => { ..do something..}, []);

//To run this program, rename the App.js to something else e.g somethingelse.js
//then change the name of this file to App.js
//then type npm start in the terminal
import React, {useState, useEffect} from "react";

function App() {
//save the value of the width of the view port in the state
const [windowWith, setWindowWidth] = useState(window.innerWidth);

//create a function called handleResize() to handle the resize event
//this function is declared inside addEventListener function
const handleResize = () => {
  setWindowWidth(window.innerWidth);
}

//we use the useEffect hook to call the handleResize function
//inside the addEventListener function
//the value of the window size is displayed as a side effect of resizing the browser window using useEffect
useEffect(() => {
  window.addEventListener("resize", handleResize);//window.addEventListener(eventname, function)

  //clean up function..
  return() => {
    //cleanup
    //we do cleanup by setting the items to an empty array
    //setItems([])
    setWindowWidth('');
  }
},[]);

  return (
    <div>
      {/**displaying the current window size*/}
     {windowWith}
    </div>
  );
}

export default App;
