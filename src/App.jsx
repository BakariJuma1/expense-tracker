import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import expensesData from "./Data/expensesData";

function App() {
  //state to store expenses
  const [expenses, setExpenses] = useState(expensesData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); //CONVERT TO LOWER CASE
  };

  const deleteExpense = (idToDelete) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== idToDelete
    );
    setExpenses(updatedExpenses);
  };
  //FILTERED EXPENSES
  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.name.toLowerCase().includes(searchTerm) || // search by name
      expense.description.toLowerCase().includes(searchTerm) // search by description
    );
  });

  return (
    <div className="appContainer">
      <aside className="sidebar">
        <h2>Expense Tracker</h2>
        <p>Start keeping control of your finances</p>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </aside>
      <main className="mainContent">
        <SearchBar onSearch={handleSearch} />
        <ExpenseTable
          expenses={filteredExpenses}
          onDeleteExpenses={deleteExpense}
        />
      </main>
    </div>
  );
}

export default App;
