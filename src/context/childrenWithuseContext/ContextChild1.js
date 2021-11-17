import { useContext } from 'react';
import {CountContext} from '../Parent';
import ContextChild2 from './ContextChild2';
import '../../../src/App.css';

const ContextChild1 = () =>{
    const count = useContext(CountContext);
    return(<div className='child-box-1'>
        <ContextChild2/>
        <h2 className='box-header'>{count}</h2>
        <p>ContextChild1</p>
    </div>);
}
export default ContextChild1;