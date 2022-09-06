import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";
import { useState } from "react";

export default function AddExpense(props) {
  const SubmittedFormDataHandler = (SubmittedData) => {
    const FormData = {
      ...SubmittedData,
      id: Math.random().toString(),
    };

    props.onAddExpense(FormData);
  };
  const [ShowForm, setShowForm] = useState(false);
  const OnCLickHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="Add_Expense_Main">
        {!ShowForm && <button className="Large_Form_Btn" onClick={OnCLickHandler}>+ Add Expense</button>}
      {ShowForm && (
        <ExpenseForm onFormDataSubmitted={SubmittedFormDataHandler} />
      )}
    </div>
  );
}
