import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../../tests/fixtures/expenses";
import moment from "moment";

test("it must render expense form", () =>{
    const content = shallow(<ExpenseForm />);
    expect(content).toMatchSnapshot();
});

test("it must render expense form when data is passed", () =>{
    const anExpense = expenses[0];
    const content = shallow(<ExpenseForm  expense={anExpense} />);
    expect(content).toMatchSnapshot();
});

test("form submission without mandatory fields will show error message", () => {
    const content = shallow(<ExpenseForm />);
    expect(content).toMatchSnapshot();
    content.find("form").simulate("submit", { preventDefault: () => {} });
    expect(content.state("isValid")).toBeFalsy();
    expect(content).toMatchSnapshot();
});

test("should update state.description on input change", () => {
    const value = "Coffee";
    const content = shallow(<ExpenseForm />);
    content.find("input").at(0).simulate("change", {
        target : { value }
    });
    expect(content.state("description")).toBe(value);
    expect(content).toMatchSnapshot();
});

test("should update state.note on input change", () => {
    const value = "Coffee with friends";
    const content = shallow(<ExpenseForm />);
    content.find("textarea").simulate("change", {
        target : {value}
    });
    expect(content.state("note")).toBe(value);
    expect(content).toMatchSnapshot();
})

test("should update state.amount on valid input", () => {
    const value = "200.00";
    const content = shallow(<ExpenseForm />);
    content.find("input").at(1).simulate("change", {
        target : {value}
    });
    expect(content.state("amount")).toBe(value);
    expect(content).toMatchSnapshot();
});

test("should not set state.amount on invalid input", () => {
    const value = "200.999";
    const content = shallow(<ExpenseForm />);
    content.find("input").at(1).simulate("change", {
        target : {value}
    });
    expect(content.state("amount")).toBe("");
    expect(content).toMatchSnapshot();
});

test("should call onSubmit with valid props provided as input", () => {
    const onSubmitSpy = jest.fn();

    const content = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

    content.find("form").simulate("submit", { preventDefault: () => {} });
    
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description : expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
    expect(content.state("isValid")).toBe(true);
});

test("should call onSubmit and set error state for invalid input", () => {
    const onSubmitSpy = jest.fn();

    const anExpense = expenses[0];
    anExpense.description = "";

    const content = shallow(<ExpenseForm expense={anExpense} onSubmit={onSubmitSpy}/>);

    content.find("form").simulate("submit", { preventDefault: () => {} });

    expect(onSubmitSpy).not.toHaveBeenCalledWith({
        description : anExpense.description,
        amount: anExpense.amount,
        createdAt: anExpense.createdAt,
        note: anExpense.note
    });
    expect(content.state("isValid")).toBe(false);
})


test("should set new date on data change", () => {
    const now = moment();
    const content = shallow(<ExpenseForm />);

    content.find('withStyles(SingleDatePicker)').prop("onDateChange")(now);
    expect(content.state("createdAt")).toBe(now);
})


test("should set calendar focussed onchange", () => {
    const now = moment();
    const content = shallow(<ExpenseForm />);

    content.find('withStyles(SingleDatePicker)').prop("onFocusChange")({ focused : true});
    expect(content.state("calendarFocused")).toBe(true);
})