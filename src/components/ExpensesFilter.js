import React from 'react';
import './expenses .css'
const ExpensesFilter = ({year, setYear}) => {
  // const [year, setYear] = useState('')

  const yearHandler = (event) =>{
    // setYear(event.target.value)  
    console.log(event.target.value)  
    setYear(event.target.value)
  }
  
  return (
    <div className="expenses">
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={year} onChange={yearHandler}>
          <option value='all'>all</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;