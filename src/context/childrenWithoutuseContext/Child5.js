
const Child5= (props) => {
    let count5 = props.count; //props received from child 4
    return<div className='child-box-1'>
        <h2>{count5}</h2>
        <p>Child5</p>
    </div>
}
export default Child5;