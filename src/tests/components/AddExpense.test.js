
import React from "react";
import {shallow} from "enzyme";
import { AddExpense } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

let addExpense, history, content;
beforeEach( () => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    content = shallow(<AddExpense addExpense={addExpense} history={history} />);
})

test("it should render AddExpense", () => {
    expect(content).toMatchSnapshot();
});


test("it should render AddExpense", () => {
    const anExpense = expenses[1];
    content.find("ExpenseForm").prop("onSubmit")(anExpense);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpense).toHaveBeenLastCalledWith(anExpense);
});