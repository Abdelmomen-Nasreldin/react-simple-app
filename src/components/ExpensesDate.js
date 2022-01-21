import React from 'react'

const ExpensesDate = (props) => {
    const day = props.date.toLocaleDateString('en-US', {day : "2-digit"})
    const month = props.date.toLocaleString('en-US', {month : "long"})
    const year = props.date.getFullYear()
    return (
        <div className="expenses-filter">
            
            <div className="">{day}</div> 
            <div className="">{month}</div> 
            <div className="">{year}</div>
        </div>
    )
}

export default ExpensesDate
