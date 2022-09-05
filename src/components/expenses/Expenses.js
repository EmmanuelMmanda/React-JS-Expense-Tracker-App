import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const Expense = [
    {
      id: 1,
      date: new Date(2021, 5, 21),
      Price: 666,
      Item: "Buying A Lamborghini",
    },
    {
      id: 2,
      date: new Date(2021, 5, 21),
      Price: 543,
      Item: "Car wash Services",
    },
    {
      id: 3,
      date: new Date(2021, 5, 22),
      Price: 777,
      Item: "Buying a Market Stock",
    },
    {
      id: 4,
      date: new Date(2021, 5, 31),
      Price: 611,
      Item: "Buying A Guiter",
    },
  ];
  return (
    <div className="ExpensesTab">
      <ExpenseItem
        date={Expense[0].date}
        Price={Expense[0].Price}
        Item={Expense[0].Item}
      />
      <ExpenseItem
        date={Expense[1].date}
        Price={Expense[1].Price}
        Item={Expense[1].Item}
      />
      <ExpenseItem
        date={Expense[2].date}
        Price={Expense[2].Price}
        Item={Expense[2].Item}
      />
      <ExpenseItem
        date={Expense[3].date}
        Price={Expense[3].Price}
        Item={Expense[3].Item}
      />
    </div>
  );
}
