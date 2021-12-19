//https://www.youtube.com/watch?v=nshyjApIovo&t=1s

//in this application we create a custom react hook that returns a random joke
//our custom hook is called useRandomJoke and it is a function that takes two parameters
import React, {useEffect, useRef, useState} from "react";

import useRandomJoke from "./useRandomJoke";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  //custom hook
  const joke = useRandomJoke(firstName, lastName);//our custom hook
  
  const generateJoke = (e) =>{
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
 

  return (
    <div>
      <center>
      <h2>Let's make some jokes!</h2>
      <form>
        <input placeholder="first name" ref={firstNameRef}/>
        <input placeholder="last name"  ref={lastNameRef}/>
        <button onClick={generateJoke}>Generate Jokes</button>
      </form>
      <p>{joke}</p>
      </center>
    </div>
  );
}

export default App;
