import React from "react";
function App2({expenses})
{
    return(
        <>
            <div>
                {expenses.map((item)=>{
                    <li key={item.id}>
                    ID: {item.id}, Expense: {item.expense}, Expensename: {item.expensename}, Total: {item.expenseamount}
                  </li>
                })}
            </div>
        </>
    )
}
export default App2;