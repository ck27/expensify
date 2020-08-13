import React from "react";
import {shallow} from "enzyme";
import ExpenseItem from "../../components/ExpenseItem";
import expenses from "../fixtures/expenses";

test("it should render an expense item", () => {
    const content = shallow( <ExpenseItem {...expenses[0]} />);
    expect(content).toMatchSnapshot();

})