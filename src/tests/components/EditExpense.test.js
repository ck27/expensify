import React from "react";
import {EditExpense} from "../../components/EditExpense";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

let editExpense, deleteExpense, history, content, anExpense;

beforeEach( () => {
    editExpense = jest.fn();
    deleteExpense = jest.fn();
    history = { push : jest.fn() };

    anExpense = expenses[2];
    const match =  {
        'params' : {
            'id' : anExpense.id
        }
    };
    content = shallow(<EditExpense expense={anExpense} editExpense={editExpense} deleteExpense={deleteExpense} history={history}  match={match}/>);
});

test("it should render EditExpense", () => {
    expect(content).toMatchSnapshot();
});

test("it should be able to edit expense", () => {
    content.find("ExpenseForm").prop("onSubmit")(anExpense);
    expect(editExpense).toHaveBeenLastCalledWith(anExpense.id, anExpense);
    expect(history.push).toHaveBeenLastCalledWith("/");
});

test("it should be able to delete expense", () => {
    content.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(deleteExpense).toHaveBeenLastCalledWith(anExpense.id);
});