import React from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseDashboard = () => (
    <div>
        <h1>Expense Dashboard</h1>

        <ExpenseFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;