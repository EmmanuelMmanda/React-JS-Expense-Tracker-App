import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";


function App(props) {
  let OldExpense = [
    {
      id: 1,
      date: new Date(2019, 11, 21),
      Price: 66600,
      Item: "Buying A Lamborghini",
    },
    {
      id: 2,
      date: new Date(2020, 2, 21),
      Price: 543888,
      Item: "Car wash Services",
    },
    {
      id: 3,
      date: new Date(2022, 8, 22),
      Price: 77700,
      Item: "Buying a Market Stock",
    },
    {
      id: 4,
      date: new Date(2022, 9, 1),
      Price: 60110,
      Item: "Buying A Guiter",
    },
    {
      id: 4,
      date: new Date(2020, 4, 1),
      Price: 61100,
      Item: "Buying A Guiter",
    },
    {
      id: 5,
      date: new Date(2021, 12, 20),
      Price: 34000,
      Item: "Going out For Fun",
    },
  ];
  const [Expense, setExpense] = useState(OldExpense);

  const AddExpenseHandler = (SubmittedExpenses) => {
    let NewExpense = [...OldExpense, SubmittedExpenses];
    setExpense(NewExpense);
  };

  OldExpense = Expense;
  return (
    <div >
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        Creating an Expense Tracker App in react Js
      </h1>
     
      <AddExpense onAddExpense={AddExpenseHandler} />
      <Expenses ExpensesProp={Expense} />

    </div>
  );
}

export default App;
