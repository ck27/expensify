import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount} from "../actions/filters";

const ExpenseFilter = (props) => (
    <div>
        <input type="text" value={props.filter.text} onChange={(e)=> {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={props.filter.text} onChange={(e) => {
            if(e.target.value == "date") {
                return props.dispatch(sortByDate());
            }
            if(e.target.value == "amount"){
                return props.dispatch(sortByAmount());
            } 
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>

);

const mapStateToProps = (state) => (
    {
        filter: state.filter
    }
)

export default connect(mapStateToProps)(ExpenseFilter);