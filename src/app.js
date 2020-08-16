import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import "normalize.css/normalize.css";
import "./styles/app.scss";
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore"; 
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch( addExpense({ amount: 470, description: "9538404979 postpaid bill", createdAt:"20200615"}) );
store.dispatch( addExpense({ amount: 352, description: "9538968000 postpaid bill", createdAt:"20200615"}) );
store.dispatch( addExpense({ amount: 2240, description : "water bill", createdAt:"20200604"}) );
store.dispatch( addExpense({ amount: 2289, description: "Pump EC bill", createdAt:"20200618"}) );
store.dispatch( addExpense({ amount: 1586, description: "Home EC bill", createdAt:"20200618"}) );
store.dispatch( setTextFilter("ec"));

const state = store.getState();
console.log(getExpenses(state.expenses,state.filter));

const appJsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(appJsx, document.getElementById("app"));