import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, deleteExpense } from "../actions/expenses";

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Edit Expense : {props.match.params.id}</h1>
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                console.log(expense);
                props.dispatch( editExpense (props.expense.id, expense));
                props.history.push("/");
            }}/>
            <button onClick={() => {
                props.dispatch(deleteExpense(props.expense.id));
                props.history.push("/");
            }}>REMOVE</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find( (exp) => exp.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpense);