import React from "react";
import { Link } from "react-router-dom";

const ExpenseDashboard = () => (
    <div>
        <h1>Expense Dashboard</h1>

        <Link to="/edit/1">Expense : 1</Link>
    </div>
);

export default ExpenseDashboard;