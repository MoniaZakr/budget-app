import React,{useState} from 'react';
import './ExpenseForm.css';
// import { useState } from 'react';

function ExpenseForm(props) {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler (event) {
        event.preventDefault();

        const expenseDate = {
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate),
        };
        props.onSaveExpenseDate(expenseDate);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2020-01-01" max="2023-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm