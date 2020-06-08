import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import Header from "../components/Header";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";











const AppRouter = () => (
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

export default AppRouter;