import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesCHart from "./ExpensesChart";

export default function Expenses(props) {
  const ExpenseObject = props.ExpensesProp;

  const [FilterYear, setFilterYear] = useState("2020");
  const ChangeYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const FilteredExpenses = ExpenseObject.filter((myexpense) => {
    return myexpense.date.getFullYear().toString() === FilterYear;
  });


  return (
    <div className="ExpensesTab">
      <ExpenseFilter selected={FilterYear} onChangeYear={ChangeYearHandler} />

      <ExpensesCHart expenses={FilteredExpenses}/>
      {/* 
        ---first Mthod --
      {FilteredExpenses.length === 0 ? (
        <p className="Item_text">No Item Found</p>
      ) : (
        <p className="Item_text">We found {FilteredExpenses.length} items </p>
      )} */}
      {FilteredExpenses.length === 0 && (
        <p className="Item_text">No Item Found</p>
      )}
      {FilteredExpenses.length > 0 &&
        FilteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            Price={expense.Price}
            Item={expense.Item}
          />
        ))}
    </div>
  );
}
