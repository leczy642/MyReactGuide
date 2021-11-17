import ContextChild3 from './ContextChild3';

const ContextChild2 = () =>{
    return(<div className='child-box-2'>
        <ContextChild3/>
        <h2 className='box-header'>hello</h2>
        <p>ContextChild2</p>
    </div>);
}
export default ContextChild2;