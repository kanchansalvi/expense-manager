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


const currencies = [
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
class FormDialog extends React.Component<{}, {num1:string, num2:string, currency: string}>{
// class FormDialog extends React.Component<{}, Expense>{

  constructor(props: any){
    super(props);
    this.state = {
      num1: 'ItemName',
      num2:'Amount',
      currency: 'Grocery'
      
    }
    
    // this.msg = 'hello';
  
  // this.handleChange = this.handleClickOpen.bind(this);
  // this.handleChange = this.handleClose.bind(this);
  this.handleNum1 = this.handleNum1.bind(this);
  this.handleNum2 = this.handleNum2.bind(this);
  this.handleCategory = this.handleCategory.bind(this);
  this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
}


handleDialogSubmit(event: any){
  console.log("State is " + this.state);
  
}

handleAdd(event: any){
  //this.setState({num1: event.target.value, num2: event.target.value, currency: event.target.value});
  //console.log(this.state.num1 + " num2="+this.state.num2+" curr="+ this.state.currency);
 
  console.log("State is " + JSON.stringify(this.state));
}

handleNum1(event: any){
  this.setState({num1: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  // this.msg = "Hello World" ;
  console.log(this.state.num1);
}
handleNum2(event: any){
  this.setState({num2: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  console.log(this.state.num2);
}
handleCategory(event: any){
  this.setState({currency: event.target.value});
  //console.log("State is " + this.state.num1 + " and " + this.state.num2);
  console.log(this.state.currency);
}

render(){

  return (
    <div>
      <Button variant="outlined" color="primary"  >
        Add Expenses
      </Button>
      <Dialog open={true} onClose={this.handleDialogSubmit} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add your expenses</DialogTitle>
          <DialogContent>
             <DialogContentText>
              
                 <TextField
                    value={this.state.num1}
                    onChange={this.handleNum1}/> <br/>
                  
                  <TextField
                    value={this.state.num2}
                    onChange={this.handleNum2}/> <br/>
          
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                   value={this.state.currency}
                  onChange={this.handleCategory}
                  helperText="Please select your currency"
                >
                  {currencies.map((option) => (
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
          <Button color="primary" onClick={this.handleAdd}>
            ADD
          </Button>
          <Button color="primary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
  export default FormDialog;
  