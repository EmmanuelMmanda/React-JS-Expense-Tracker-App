import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

function App() {

  return (
    <div>
      <h1 style={{textAlign: 'center',color: '#fff'}}>Creating an Expense Tracker App in react Js</h1>
      <AddExpense/>     
      <Expenses />
    </div>
  );
}

export default App;
