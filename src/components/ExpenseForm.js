import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";


const now = moment();

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? props.expense.amount : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            isValid: true
        };
    }


    onDescChange = (e) => {
        const description = e.target.value;
        
        this.setState( () => ({ description}));
        console.log(this.state);
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if( !amount || amount.match(/^\d+(\.\d{0,2})?$/) ) {
            this.setState( () => ({ amount }) );
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState( () => ({createdAt}))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused : focused   
        }));
    }

    onSubmit = (e) => {
        console.log('Expense Form submitted')
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({isValid :false}))
        } else {
            this.setState(() => ({isValid :true}));
            console.log("submitted dispatch");
            this.props.onSubmit({
                description: this.state.description,
                amount : parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.isValid && <p>Please enter valid input for desription amount</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescChange} />
                    <br/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                    <br/>
                    <textarea placeholder="Notes for your expense (optional)" value={this.state.note} onChange={this.onNoteChange} />
                    <br/>
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        id="createdAt"
                        numberOfMonths={1}
                        isOutsideRange={ () => ( false )}
                    />
                    <br/>
                    <br/>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}