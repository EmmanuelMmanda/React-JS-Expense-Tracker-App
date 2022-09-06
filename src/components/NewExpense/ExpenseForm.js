import { useState } from "react";
import "./ExpenseForm.css";


export default function ExpenseForm(props) {
  const [ItemInput, setItemInput] = useState("");

  const ItemChangeHandler = (event) => {
    setItemInput(event.target.value);
  };
  const [PriceInput, setPriceInput] = useState("");

  const PriceChangeHandler = (event) => {
    setPriceInput(event.target.value);
  };
  const [DateInput, setDateInput] = useState("");
  const DateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const FormData = {
      Item: ItemInput,
      Price: PriceInput,
      date: new Date(DateInput),
    };
    
    props.onFormDataSubmitted(FormData);

    setDateInput("");
    setItemInput("");
    setPriceInput("");
   
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="Item_Box">
        <label>Item</label>
        <input type="text" value={ItemInput} onChange={ItemChangeHandler} required />
      </div>
      <div className="Price_Box">
        <label>Price</label>
        <input
          type="number"
          value={PriceInput}
          onChange={PriceChangeHandler}
          min="1"
          step="1"
          required
        />
      </div>
      <div className="Date_Box">
        <label>Date</label>
        <input
          type="date"
          value={DateInput}
          onChange={DateChangeHandler}
          min="2019-01-01"
          max="2022-12-31"
          required
        />
      </div>
      <button type="submit">Add Expense </button>
    </form>
  );
}
