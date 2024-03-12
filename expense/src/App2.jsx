import React from "react";

function App2({ expenses }) {
  return (
    <>
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {expenses.map((item) => (
            <li key={item.id}>
              ID: {item.id}, Expensename: {item.expensename}, Amount: {item.expense}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App2;
