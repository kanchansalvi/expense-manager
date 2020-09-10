import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button , Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core';


function AddExpense() {
    return (
     
       <Dialog  aria-labelledby="form-dialog-title">
       <DialogTitle id="form-dialog-title">Add your expenses</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div> Item name : <input id="name"></input> </div>
              <div> Amount : <input id="amount"></input> </div>
              <div> Category : 
                <select name="category" id="category">
                  <option value="Grocery">Grocery</option>
                  <option value="Baby">Baby</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Dining">Dining</option>
                </select>
              </div>
              <div> Date :  <input id="date" type="date"></input> </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  color="primary">ADD</Button>
            <Button  color="primary"> CANCEL</Button>
          </DialogActions>
      </Dialog>
    );
  }

  export default AddExpense;
  