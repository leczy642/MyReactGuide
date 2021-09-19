import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpsensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

import './ExpenseList.css'

const Expenses = (props) => {
    //const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredYear, setFilteredYear] = useState('All');
    
    //const filterChangeHandler = (selectedYear) =>{
        //setFilteredYear(selectedYear);
    //}
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    //using filter returns a brand new array
    //it does not change the original array
    const filteredExpenses = props.items.filter(expense =>{
        //we are converting the date object to a string
        return expense.date.getFullYear().toString() === filteredYear
    });

    //CONDITIONAL RENDERING
    let expensesContent = <h2 className="expenses-list__fallback">No expenses to display</h2>

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id}
            title = {expense.title} 
            amount = {expense.amount}
            date = {expense.date}/>);
    }
    //this renders all content 
    if(filteredYear === 'All'){
        expensesContent = props.items.map(expense => <ExpenseItem key={expense.id}
            title = {expense.title} 
            amount = {expense.amount}
            date = {expense.date}/>);
    }
    //
    return(
        <div>
        <Card className="expenses">
            <ExpsensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            

            {/*The code below retrieves the expense items stored in the expenses array*/}
            {/*formerly used props.items to display everything*/}
            {/**CONDITIONAL RENDERING*/}
            {/*filteredExpenses.length === 0 && <p>No Items to display</p>*/}
            {/*filteredExpenses.map(expense => <ExpenseItem key={expense.id}
            title = {expense.title} 
            amount = {expense.amount}
            date = {expense.date}/>)*/}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList items={expensesContent}/>

             {/****/}

            {/* 
            <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            />
            */}
           
        </Card>
        </div>
    );
}

export default Expenses;
