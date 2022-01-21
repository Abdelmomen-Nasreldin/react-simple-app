import React from 'react'
import Expenses from './Expenses ';

const ExpensesContent = (props) => {
      // let expensesContent = <p>sorry sir no data found</p>;
  // if (filterExpensesData.length !== 0) {
  //   expensesContent = filterExpensesData.map((expense, index) => {
  //     return (
  //       <Expenses
  //         key={index} // Because i do not have id here.
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }
    return (
        <div>
             {props.filterExpensesData.length === 0 && <p>sorry sir no data found</p> }
      {props.filterExpensesData.length !== 0 && props.filterExpensesData.map((expense) => {
        return (
          <Expenses
            key={expense.title} // Because i do not have id here.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
        </div>
    )
}

export default ExpensesContent
