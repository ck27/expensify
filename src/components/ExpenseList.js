import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
    <div>
        <h2>Expenses : {props.name}</h2>
        {props.expenses.length}
    </div>
);

const ConnectedExpenseList = connect( (state) => {
    return {
        name: "Chethan",
        expenses : state.expenses
    }

})(ExpenseList);

export default ConnectedExpenseList;