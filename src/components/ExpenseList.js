import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
    <div>
        { props.expenses.length === 0 ? (
            <p>No expenses</p>
        ): (
            props.expenses.map( (expense, index) => (
                <ExpenseItem {...expense} key={index}/>
            ))
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filter )
    }

};

export default connect(mapStateToProps )(ExpenseList);

