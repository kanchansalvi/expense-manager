import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';


// const categoryList: string[]=["Home",
// "Baby", 
// "Food", 
// "Grocery"];

// const abc = (categoryList: boolean, {}) => {
//   return <div>
//     {categoryList? <h1/>: <h1/>}
//   </div>
// }



export class BtnClick extends React.Component<{}>{
  
    state = { LoggedIn : false};

    toggle() {
      let currVal = this.state.LoggedIn;
      this.setState({LoggedIn: !currVal});
    }
  
    render() {
     return <div> 
       <button onClick={() => {this.toggle()}}>{this.state.LoggedIn? "LOG OUT" : "LOGIN"}</button>
       <div>
         User is {this.state.LoggedIn? "logged in" : "not logged in"}
       </div>
        </div>;
    }
}



function AddExpenseBtn() {
  return (
    <div> <button onClick={() => {}}> Add Expense </button> </div>
  );
}

function ExpenseDialog(){
  return(
<dialog open= {true}> 
    <h5>Enter the expenses to add </h5>
      <div> Item name : <input></input>  </div>
       <div> Amount : <input></input> </div>
       <div> Category : <input></input> </div>
       <div> Date :  <input></input> </div>
        <div><button> Save </button> </div>
    </dialog>
  );
}
function AppName(){
  return(
    <div><h1>EXPENSE MANAGER</h1></div>
  );
}
function App() {
  return (
    <div className="App">
      <AppName/>
      
    <AddExpenseBtn/>
    <BtnClick/>
    <ExpenseDialog/>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
