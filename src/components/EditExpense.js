import React from "react";
import ExpenseForm from "./ExpenseForm";

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Edit Expense : {props.match.params.id}</h1>
            <ExpenseForm />
        </div>
    );
}

export default EditExpense;