import React from "react";
import {shallow} from "enzyme";
import { ExpenseList } from "../../components/ExpenseList"
import expenses from "../fixtures/expenses";

test("ExpenseList must render list of expenses provided", () => {
    const content = shallow(<ExpenseList expenses={expenses} />);
    expect(content).toMatchSnapshot();
});

test("should render No expenses when empty list is passed", () => {
    const content = shallow(<ExpenseList expenses={[]} />);
    expect(content).toMatchSnapshot();
})