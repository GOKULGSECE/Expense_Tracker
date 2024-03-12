// Index.jsx
import React, { useState, useEffect } from 'react';

function Index({ onAddExpense, editExpenseData }) {
  const [expense, setExpense] = useState('');
  const [expensename, setExpensename] = useState('');

  useEffect(() => {
    if (editExpenseData) {
      setExpense(editExpenseData.expense);
      setExpensename(editExpenseData.expensename);
    }
  }, [editExpenseData]);

  function handleAddExpense(e) {
    e.preventDefault();
    onAddExpense(expense, expensename);
    setExpense('');
    setExpensename('');
  }

  function handleInputChange(e) {
    setExpense(e.target.value);
  }

  function handleInputExpensename(e) {
    setExpensename(e.target.value);
  }

  return (
    <div className="input-container">
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          value={expensename}
          onChange={handleInputExpensename}
          className="input-field"
          placeholder="enter expense name"
        />
        <br />
        <input
          type="number"
          value={expense}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Enter expense"
        />
        <br />
        <button type="submit">{editExpenseData ? 'Save Edit' : 'Add Expense'}</button>
      </form>
    </div>
  );
}

export default Index;
