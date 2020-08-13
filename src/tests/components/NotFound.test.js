import React from "react";
import {shallow} from "enzyme";
import NotFound from "../../components/NotFound";

test("it should render NotFound", () => {
    const content = shallow(<NotFound />);
    expect(content).toMatchSnapshot();
})