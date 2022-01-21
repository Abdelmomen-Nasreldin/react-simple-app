import React, { useState } from "react";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesContent from "./components/ExpensesContent";

const expensesDataDummy = [
  { title: "test1", amount: 1, date: new Date(2020, 2, 1) },
  { title: "test2", amount: 1, date: new Date(2020, 2, 1) },
  { title: "test3", amount: 3, date: new Date(2021, 2, 1) },
  { title: "test4", amount: 1, date: new Date(2022, 2, 1) },
  { title: "test5", amount: 2, date: new Date(2021, 2, 1) },
];

function App() {
  const [year, setYear] = useState("2022")
  const [expensesData, setExpensesData] = useState(expensesDataDummy);
  // const [filterExpensesData, setFilterExpensesData] =
  //   useState(expensesDataDummy);
  const filterExpensesData = expensesData.filter((data) => {
    if (year === "all") {
      return data;
    }
    return data.date.getFullYear().toString() === year; // without toString method we need == not ===
  })

  // const yearHandlerApp = (year) => {
   
  //   setFilterExpensesData(
  //     expensesData.filter((data) => {
  //       if (year === "all") {
  //         return data;
  //       }
  //       return data.date.getFullYear().toString() === year; // without toString method we need == not ===
  //     })
  //   );
  //   setInitYear(year)
  // };

  const formApp = (newExpense) => {
    setExpensesData((preState) => [newExpense, ...preState]);
  };
  return (
    <div className="App">
      <ExpenseForm newExpense={formApp} />
      <ExpensesFilter setYear={setYear} year={year}/>
      <ExpensesContent filterExpensesData={filterExpensesData} />
      
    </div>
  );
}

export default App;
