import { useState, useEffect } from "react";

const DisplayNum = ({displayNum}) =>{//displayNum is a prop from the parent component
    const [num, setNum] = useState();

    //in this case we want useEffect the fire the 
    //setNum function each time the incoming displayNum function
    //changes value
    useEffect(()=>{
        setNum(displayNum());//this is technically a callback function
        console.log("display number side effect")
    },[displayNum]);
    
    //the value from the displayNum function is rendered here
    return <div>{num}</div>
    // return num.map((num, index)=>{
    //     return <div key={index}>{num}</div>
    // })
}

export default DisplayNum;