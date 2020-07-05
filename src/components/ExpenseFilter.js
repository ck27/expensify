import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from 'react-dates';


class ExpenseFilter extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState( () => ({calendarFocused}) );
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={(e)=> {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filter.text} onChange={(e) => {
                    if(e.target.value == "date") {
                        return this.props.dispatch(sortByDate());
                    }
                    if(e.target.value == "amount"){
                        return this.props.dispatch(sortByAmount());
                    } 
                }}>
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
)

export default connect(mapStateToProps)(ExpenseFilter);