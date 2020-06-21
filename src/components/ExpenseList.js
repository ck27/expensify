import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
    <div>
        <h2>Expenses : {props.name}</h2>
        {props.expenses.map( (item) => (
            <p>{item.description}</p>
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        name: "Chethan",
        expenses : state.expenses,
        filters: state.filters
    }

};

export default connect(mapStateToProps )(ExpenseList);

