import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import "normalize.css/normalize.css";
import "./styles/app.scss";

import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore"; 
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import {getVisibleExpenses} from "./selectors/queries";

const store = configureStore();

store.dispatch( addExpense({ amount: 470, description: "9538404979 postpaid bill", createdAt:"20200615"}) );
store.dispatch( addExpense({ amount: 470, description: "9538404979 postpaid bill", createdAt:"20200615"}) );
store.dispatch( addExpense({ amount: 353, description: "water bill", createdAt:"20200604"}) );
store.dispatch( addExpense({ amount: 353, description: "home EC bill", createdAt:"20200604"}) );
store.dispatch( addExpense({ amount: 353, description: "pump EC bill", createdAt:"20200604"}) );
store.dispatch( setTextFilter("ec"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses,state.filter));

const appJsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(appJsx, document.getElementById("app"));