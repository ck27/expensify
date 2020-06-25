import React from 'react';
import {connect} from "react-redux";
import {setTextFilter} from "../actions/filters";

const ExpenseFilter = (props) => (
    <div>
        <input type="text" value={props.filter.text} onChange={(e)=> {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
    </div>

);

const mapStateToProps = (state) => (
    {
        filter: state.filter
    }
)

export default connect(mapStateToProps)(ExpenseFilter);