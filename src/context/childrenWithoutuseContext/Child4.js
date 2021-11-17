import React from "react";
import Child5 from "./Child5";

const Child4 = (props) => {
    let count4 = props.count;//to be passed down to Child5

    return<div className='child-box-4'>
        {/**passing count4 to Child5 */}
        <Child5 count={count4}/>
        <p>Child4</p>
    </div>
}

export default Child4;