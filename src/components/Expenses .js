import React from 'react'
import ExpensesDate from './ExpensesDate';

const Expenses  = (props) => {
    return (
        <div className="expenses">
            <ExpensesDate date={props.date}/>
        </div>
    )
}

export default Expenses 
