import Child3 from "./Child3";

const Child2 = (props) => {
    let count2 = props.count;//to be passed down to Child3
    return<div className='child-box-2'>
        {/**passing count2 to Child3 */}
        <Child3 count={count2}/>
        <p>Child2</p>
    </div>
}
export default Child2;