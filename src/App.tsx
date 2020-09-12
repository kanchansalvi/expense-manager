import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
//import AddExpense from './addExpense';
import SimpleDialogDemo from './addExpense';

// const categoryList: string[]=["Home",
// "Baby", 
// "Food", 
// "Grocery"];

// const abc = (categoryList: boolean, {}) => {
//   return <div>
//     {categoryList? <h1/>: <h1/>}
//   </div>
// }



function AppName(){
  return(
    <div><h1>EXPENSE MANAGER</h1></div>
  );
}
function App() {
  return (
    <div className="App">
      <AppName/>
     <div><h1>Welcome to Expense Manager</h1></div>
    <SimpleDialogDemo/>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"q111              />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
