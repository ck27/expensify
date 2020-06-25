import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h2>Expenses : {props.name}</h2>
        {props.expenses.map( (expense, index) => (
            <ExpenseItem {...expense} key={index}/>
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filter )
    }

};

export default connect(mapStateToProps )(ExpenseList);

