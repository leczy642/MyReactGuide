//import './ExpenseDate'
//importing the useState hook from react
import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){
    //title is the value of props.title which is the previous data
    //setTitle is the function will contain the new information we will use
    //to change the data using state
    const [title, setTitle] = useState(props.title);
    
    // const clickHandler = () => {
    //     //enter the new value inside setTitle() function
    //     setTitle("Updated!");
    //     console.log(props.title);
    // }
    return (
        <Card className="expense-item">
                
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/** <button onClick={clickHandler}>Click me</button>*/}
        </Card>
    );
}

export default ExpenseItem;