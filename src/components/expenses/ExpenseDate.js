import './ExpenseDate.css'; 

export default function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <div className="ExpenseItem_Date">
      <div>{day}</div>
      <div>
        <div>{Month}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}
