import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import ReactModal from "react-modal";

import "normalize.css/normalize.css";
import "./styles/app.scss";

const ExpenseDashboard = () => (
    <div>
        <h1>Expense Dashboard</h1>
    </div>
);

const AddExpense = () => (
    <div>
        <h1>Add Expense</h1>
    </div>
);

const EditExpense = () => (
    <div>
        <h1>Edit Expense</h1>
    </div>
);

const Help = () => (
    <div>
        <h1>HELP</h1>
    </div>
);

const routes = (
    <BrowserRouter>
        <Route exact={true} path="/" component={ExpenseDashboard} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={Help} />
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById("app"));

// To handle warning thrown by react-modal
ReactModal.setAppElement(document.getElementById("app"));