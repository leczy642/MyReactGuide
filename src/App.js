import React, {useState, useRef, useLayoutEffect, useDebugValue} from "react";
//The USELAYOUTEFFECT HOOK
//The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
//it can be used to measure the width or height of a DOM element after render occurs. 
//please note : Prefer the standard useEffect when possible to avoid blocking visual updates.
//However, it is recommended starting with useEffect first and only trying useLayoutEffect if that causes a problem.
function App() {
  return (
    <div>
      <h2>UseLayoutEffect Example</h2>
      <UseLayoutEffectComponent />
    </div>
  );
}

export default App;

const UseLayoutEffectComponent = () =>{
  const [rect, setRect] = useState({});
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const divRef = useRef();

  //useLayout effect is called each time the value of count changes
  useLayoutEffect(()=>{
    setRect(divRef.current.getBoundingClientRect());
  },[count]);

  useDebugValue("custom label");
  
  return(
    <div>
      <p>Resize the browser window, the click the 'Render' button to see changes </p>
      <div ref={divRef}>This element is rendered {count} times</div>
      <input type="text" ref={inputRef}/>
      <button onClick={()=>setCount(count+1)}>Render</button>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
}
//THE USEDEBUGVALUE HOOK
//useDebugValue can be used to display a label for custom hooks in React DevTools.
