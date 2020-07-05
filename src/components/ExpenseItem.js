import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseItem = ({ id, description, amount, createdAt, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <div>
            <p>{amount} Paid at {createdAt}</p>
        </div>
    </div>
);

export default ExpenseItem;