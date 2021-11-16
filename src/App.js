//THE FOLLOWING PROGRAM ILLUSTRATES THE USEEFFECT HOOK
//to fetch data from a server
//The useEffect hook is called after the component is rendered for the first time.
//the hook is called renders a side effect in response to changes in state input values.
//the useEffect takes in two parameters: a function and an array of dependencies.
//for example, useEffect(function, dependencies);
//eg useEffect(() => { ..do something..}, []);
import React, {useState, useEffect} from "react";

function App() {
const [resourceType, setresourceType] = useState('');
const [items, setItems] = useState([]);
const [state, setState] = useState('');

//we use useEffect to fetch data from the server
//the data displayed from the server is determined by value in the ${resourceType} state
//the dollar sign and curly braces are allows the state values to be used in the url on the fly
//**interpolate**
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);


 //we are returning buttons which are used to change the state of the resourceType
  return (
    <div>
      <button onClick={() => setresourceType('posts')}>Posts</button>
      <button onClick={() => setresourceType('users')}>Users</button>
      <button onClick={() => setresourceType('comments')}>Comments</button>
      <button onClick={() => setState('test')}>Test</button>
      <div>{resourceType}</div>
      <div>
        {/**we are mapping the elements from the items state and return them in JSON*/}
        {/* {items.map((item)=>{ return <div key={item.id}>{JSON.stringify(item)}</div>})} */
        items.map((item)=>{ return <div key={item.id}>{JSON.stringify(item)}</div>})}
      </div>
    </div>
  );
}

export default App;
