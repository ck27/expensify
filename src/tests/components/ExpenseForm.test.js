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
