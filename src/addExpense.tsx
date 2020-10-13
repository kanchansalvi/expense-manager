//import React from 'react';
//import logo from './logo.svg';
// eslint-disable-next-lineS
import './App.css';
 //import { Button , Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Typography} from '@material-ui/core';
import {Expense} from './models/Expense';

import React from 'react';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem } from '@material-ui/core';


const category = [
  {
    value: 'Grocery',
    label: 'Grocery',
  },
  {
    value: 'Home',
    label: 'Home',
  },
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

//interface Expense {}
interface EState extends Expense{
  dialogState : boolean
}

// let ex: Expense = {
//   desc: "";
// };

//class FormDialog extends React.Component<{}, {num1:string, num2:string, currency: string}>{
//  class FormDialog extends React.Component<{}, Expense>{
 class FormDialog extends React.Component<Expense/*props*/, EState/*state*/>{
 
  // class FormDialog extends React.Component<Expense, EState>{
  constructor(props: any){
    super(props);
    this.state = {
      desc: this.props.desc,
      amount: this.props.amount,
      category: this.props.category,
      date: this.props.date,
      dialogState: false
      
    };
    
 
  this.handleNum1 = this.handleNum1.bind(this);
  this.handleNum2 = this.handleNum2.bind(this);
  this.handleCategory = this.handleCategory.bind(this);
  this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleClickOpen = this.handleClickOpen.bind(this);
  this.handleClickCancel = this.handleClickCancel.bind(this);
  this.renderTableData = this.renderTableData.bind(this);
}

renderTableData() {
  // return this.state.Expense.map((expenses, index) => {
  //    const { desc, amount, category, date } = expenses //destructuring
     return (
      <div>
       <h1 id='title'>Expenses Dynamic Table</h1>
          <table id='expenses'>
            <tbody>
              <tr key={this.state.desc}>
                <td>{this.state.desc}</td>
                <td>{this.state.amount}</td>
                <td>{this.state.category}</td>
                <td>{this.state.date}</td>
              </tr>
            </tbody>
            </table>
        </div>
     )
  // })
}

handleDialogSubmit(event: any){
  console.log("State is " + this.state);
  
}

handleAdd(event: any){
  
  console.log("State is " + JSON.stringify(this.state));
  console.log(this.props.desc);

  this.renderTableData();
}

handleNum1(event: any){
  this.setState({desc: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  // this.msg = "Hello World" ;
  console.log(this.state.desc);
}
handleNum2(event: any){
  this.setState({amount: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  console.log(this.state.amount);
}
handleCategory(event: any){
  this.setState({category: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  console.log(this.state.category);
}

 handleClickOpen(){
  this.setState({
   dialogState: true
  });
}

handleClickCancel(){
  this.setState({
   dialogState: false
  });
  this.renderTableData();
}

render(){

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen} >
        Add Expenses
      </Button>

      <Dialog open={this.state.dialogState} onClose={this.handleDialogSubmit} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add your expenses</DialogTitle>
          <DialogContent>
             <DialogContentText>
              
                 <TextField
                    value={this.state.desc}
                    onChange={this.handleNum1}/> <br/>
                  
                  <TextField
                    value={this.state.amount}
                    onChange={this.handleNum2}/> <br/>
          
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                   value={this.state.category}
                  onChange={this.handleCategory}
                  helperText="Please select your currency"
                >
                  {category.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
        </TextField>
{/*         
                 <select name="category" id="category">
                   <option value="Grocery">Grocery</option>
                   <option value="Baby">Baby</option>
                   <option value="Entertainment">Entertainment</option>
                   <option value="Dining">Dining</option>
                 </select> */}
                 <br/>
                  <TextField
                    type="date"
                    defaultValue="2020-09-24" />
             </DialogContentText>
           </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleClickCancel}>
            ADD
          </Button>
          <Button color="primary" onClick = {this.handleClickCancel}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
  export default FormDialog;
  