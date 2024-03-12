// App.jsx
import React, { useState } from 'react';
import Index from './indexx';
import App2 from './App2';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpenseData, setEditExpenseData] = useState(null);

  const onAddExpense = (expense, expensename) => {
    if (editExpenseData) {
      const updatedExpenses = expenses.map((item) =>
        item.id === editExpenseData.id ? { ...item, expense, expensename } : item
      );
      setExpenses(updatedExpenses);
      setEditExpenseData(null);
    } else {
      const newExpense = { id: expenses.length + 1, expense, expensename };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    }
  };

  const onDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    setEditExpenseData(null);
  };

  const onEditExpense = (id) => {
    const expenseToEdit = expenses.find((item) => item.id === id);
    setEditExpenseData(expenseToEdit);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Index onAddExpense={onAddExpense} editExpenseData={editExpenseData} />
      <div className="expenses-container">
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((item) => (
            <li key={item.id}>
              Usage: {item.id}, Title: {item.expensename}, Amount: {item.expense}
              <br />
              <button onClick={() => onDeleteExpense(item.id)}>Delete</button>
              <br />
              <button onClick={() => onEditExpense(item.id)}>Edit</button>
            </li>
          ))}
        </ul>
        {/* <App2 expenses={expenses} />  */}
      </div>
    </div>
  );
}

export default App;
