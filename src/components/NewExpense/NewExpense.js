import React, {useState}from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
          };
        //props.onAddExpense(expenseData)
        props.onAddExpense(expenseData);
        //console.log(expenseData);
        //setIsEditing(false);
    };

    //set setIsEditing to true
    const startEditingHandler =()=>{
      setIsEditing(true);
    }
    //set setIsEditing to false
    const stopEditingHandler =()=>{
      setIsEditing(false);
    }
    return (
        <div className='new-expense'>
          {/*we use conditional rendering*/}
          {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
          {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
      );
    
}
export default NewExpense;