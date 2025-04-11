import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  //state to store each form field
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload
    const newExpense = {
      name,
      description,
      category,
      amount: parseFloat(amount),
      date,
    };
    onAddExpense(newExpense); //call the function passed from App

    setName("");
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");
  };
  return (
    <form action="" className="expenseForm" onSubmit={handleSubmit}>
      <h3>Add Expenses</h3>
      {/* expense form */}
      <input
        type="text"
        placeholder="Enter your Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter your Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
export default ExpenseForm;
