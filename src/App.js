//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import './components/MyComp';
import './components/ExpenseItem';
//import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(Date.UTC(2020, 7, 14)),
  }, 
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(Date.UTC(2021, 2, 12))},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(Date.UTC(2021, 2, 28)),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(Date.UTC(2021, 5, 12)),
  },
];

function App() {
  //expenses is the array elements from DUMMY data
  //setExpenses allows us to add a new value
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //this adds a new expense to the DUMMY_EXPENSES array
  //...prevExpenses holds a copy of the previous expenses
  //expense is the new data to be added
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [...prevExpenses, expense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
