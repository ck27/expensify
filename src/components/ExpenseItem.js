import React from "react";

const ExpenseItem = ({ description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} Paid at {createdAt}</p>
    </div>
);

export default ExpenseItem;