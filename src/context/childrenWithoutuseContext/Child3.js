import Child4 from "./Child4";


const Child3 = (props) => {
    let count3 = props.count;//to be passed down to Child4

    return<div className='child-box-3'>
        {/**passing count3 to Child4 */}
        <Child4 count={count3}/>
        <p>Child3</p>
    </div>
}
export default Child3;