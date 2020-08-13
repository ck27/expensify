import React from "react";
import {shallow } from 'enzyme'; // ES6
import toJson from "enzyme-to-json";
import Header from "../../components/Header";

test("it must render Header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});