import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
//import AddExpense from './addExpense';
import SimpleDialogDemo from './addExpense';
import ViewExpense from './ViewExpense';

import {Expense} from './models/Expense';

function AppName(){
  return(
    <div><h1>EXPENSE MANAGER</h1></div>
  );
}

let ex: Expense = {
  desc: "Ganesh",
  amount: 100,
  category: "Grocery",
  date: "",
};

function App() {
  return (
    <div className="App">
      <AppName/>
     <div><h1>Welcome to Expense Manager</h1></div>
    <SimpleDialogDemo {...ex}/>
    {/* <ViewExpense{...ex}/> */}
    <ViewExpense/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
