import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../../tests/fixtures/expenses";

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
})