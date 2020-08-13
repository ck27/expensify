import React from "react";
import {shallow} from "enzyme";
import ExpenseDashboard from "../../components/ExpenseDashboard";

test("it should render ExpenseDashboard", () => {
    const content = shallow(<ExpenseDashboard />);
    expect(content).toMatchSnapshot();
})