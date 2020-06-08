import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
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

const NotFound = () => (
    <div>
        <h1>Looks like you took a wrong turn :(</h1>
        <Link to="/">Click to go HOME</Link>
    </div>
);


const Header = () => (
    <header>
        <div>
            <h1>expensify</h1>
        </div>
        <div className="links">
            <NavLink exact={true} to="/" activeClassName="is-active">DASHBOARD</NavLink>
            <NavLink to="/add" activeClassName="is-active">ADD EXPENSE</NavLink>
            <NavLink to="/edit" activeClassName="is-active">EDIT EXPENSE</NavLink>
            <NavLink to="/help" activeClassName="is-active">HELP</NavLink>
        </div>
    </header>

);
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboard} />
                <Route path="/add" component={AddExpense} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById("app"));

// To handle warning thrown by react-modal
ReactModal.setAppElement(document.getElementById("app"));