import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, deleteExpense } from "../actions/expenses";

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        console.log(expense);
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }

    onDelete = () => {
        this.props.deleteExpense(this.props.expense.id);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Edit Expense : {this.props.match.params.id}</h1>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button onClick={this.onDelete}>REMOVE</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find( (exp) => exp.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch,props) => ({
    editExpense : (id, expense) => dispatch(editExpense(id, expense)),
    deleteExpense : (id) => dispatch(deleteExpense(id))    
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);