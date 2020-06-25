import React from "react";
import { connect } from "react-redux";
import { deleteExpense } from "../actions/expenses";

const ExpenseItem = ({ id, description, amount, createdAt, dispatch}) => (
    <div>
        <h3>{description}</h3>
        <div>
            <p>{amount} Paid at {createdAt}</p>
            <button onClick={() => {
                dispatch(deleteExpense(id));
            }}>REMOVE</button>
        </div>
    </div>
);

export default connect()(ExpenseItem);