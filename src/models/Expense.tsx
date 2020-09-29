
import React from "react";
import './Expense.css';

 export interface Expense {
    desc: string;
    amount: number;
    category: string;
    date: string;
    // onClick: () => void;
}

// export const Expense: React.FC <Expense> = ({desc, amount, category, date}) => {

//     return(
//         <div className="todo">
//             <button className="todo-check" onClick={() => onclick}></button>
//             <div>{desc}</div>
//             <div>{amount}</div>
//             <div>{category}</div>
//             <div>{date}</div>
//         </div>
//     );
// };