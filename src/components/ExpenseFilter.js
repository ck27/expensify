import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from 'react-dates';


export class ExpenseFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState( () => ({calendarFocused}) );
    }

    onTextFilterChange = (e)=> {
        this.props.setTextFilter(e.target.value);
    };

    onSortFilterChange = (e) => {
        if(e.target.value == "date") {
            return this.props.sortByDate();
        }
        if(e.target.value == "amount"){
            return this.props.sortByAmount();
        } 
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={this.onTextFilterChange}/>
                <select value={this.props.filter.text} onChange={this.onSortFilterChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate}
                    startDateId="2020-06-01"    
                    endDate={this.props.filter.endDate}
                    endDateId="2020-06-30"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}    
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        filter: state.filter
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        sortByDate : () => dispatch(sortByDate),
        sortByAmount: () => dispatch(sortByAmount),
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilter);