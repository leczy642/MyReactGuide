import Child2 from "./Child2";
import '../../App.css';

const Child1 = (props) => {
    let count1 = props.count;
    return(<div className='child-box-1'>
        <Child2 count={count1}/>
        <h2 className='box-header'>{count1}</h2>
        <p>Child1</p>
    </div>);
}
export default Child1;