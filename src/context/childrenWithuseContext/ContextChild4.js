import { useContext } from "react";
import {CountContext} from '../Parent';

const ContextChild4 = () =>{
    const count = useContext(CountContext);
    return(<div className='child-box-4'>
        <h2 className='box-header'>{count}</h2>
        <p>ContextChild4</p>
    </div>);
}
export default ContextChild4;