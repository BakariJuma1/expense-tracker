import React from "react";

function ExpenseTable({ expenses, onDeleteExpenses }) {
  return (
    <div className="tableContainer">
      <table className="expenseTable">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <button
                  className="deleteBtn"
                  onClick={() => onDeleteExpenses(exp.id)}
                >
                  delete expense
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
