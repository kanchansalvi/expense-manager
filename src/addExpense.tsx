//import React from 'react';
//import logo from './logo.svg';
// eslint-disable-next-lineS
import './App.css';
 //import { Button , Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Typography} from '@material-ui/core';

 import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Expenses
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add your expenses</DialogTitle>
          <DialogContent>
             <DialogContentText>
               <div> Item name : 
                 <TextField
                autoFocus
                margin="dense"
                id="ItemName"
                label="Item name"
                 />
            </div>
               <div> Amount : 
               <TextField
            autoFocus
            margin="dense"
            id="name"
            type="numeric" />
           </div>
               <div> Category : 
                 <select name="category" id="category">
                   <option value="Grocery">Grocery</option>
                   <option value="Baby">Baby</option>
                   <option value="Entertainment">Entertainment</option>
                   <option value="Dining">Dining</option>
                 </select>
               </div>
               <div> Date : 
                  <TextField
                    margin="dense"
                    id="name"
                    type="date" />
          </div>
             </DialogContentText>
           </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ADD
          </Button>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// function AddExpense() {
//     return (
       
//        <Dialog open={true} aria-labelledby="form-dialog-title">
//        <DialogTitle id="form-dialog-title">Add your expenses</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               <div> Item name : <input id="name"></input> </div>
//               <div> Amount : <input id="amount"></input> </div>
//               <div> Category : 
//                 <select name="category" id="category">
//                   <option value="Grocery">Grocery</option>
//                   <option value="Baby">Baby</option>
//                   <option value="Entertainment">Entertainment</option>
//                   <option value="Dining">Dining</option>
//                 </select>
//               </div>
//               <div> Date :  <input id="date" type="date"></input> </div>
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button  color="primary">ADD</Button>
//             <Button  color="primary" onClick ="handleClickOpen"> CANCEL</Button>
//           </DialogActions>
//       </Dialog>
//     );
//   }

  //export default AddExpense;
  