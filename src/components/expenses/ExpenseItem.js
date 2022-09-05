// import {useState} from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {

  // const [Item, setItem] = useState(props.Item)
 
  // const ClickHandler = () => {
  //      setItem('Updated Item');
  // }
  return (
    <div className="ExpenseItem_Main">
      <ExpenseDate date={props.date} />
      <div className="ExpenseItem_Title">{props.Item}</div>
      <div className="ExpenseItem_Price">${props.Price}</div>
    </div>
  );
}
