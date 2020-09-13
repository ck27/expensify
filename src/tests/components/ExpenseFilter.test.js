import React from "react";
import { shallow } from "enzyme";
import { ExpenseFilter } from "../../components/ExpenseFilter";
import { defaultFilters, altFilters } from "../fixtures/filters";
import moment from "moment";

let content, sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate;

beforeEach(() => {
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    content = shallow(<ExpenseFilter
                        filter={defaultFilters}
                        sortByAmount={sortByAmount}
                        sortByDate={sortByDate}
                        setTextFilter={setTextFilter}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />);
});

test("it should render ExpenseFilter", () => {
    expect(content).toMatchSnapshot()
});

test("it should render ExpenseFilter", () => {
    content.setProps({
        filter: altFilters
    });
    expect(content).toMatchSnapshot();
});

test("it should handle text filter change", () => {
    const text = "rent";
    content.find("input").simulate("change", {
        target :{
            value: text
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test("it should sort by date", () => {
    content.setProps({
        filter: altFilters
    })
    const type = "date";
    content.find("select").simulate("change", {
        target :{
            value: type
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("it should sort by amount", () => {
    const type = "amount";
    content.find("select").simulate("change", {
        target :{
            value: type
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("it should handle changes in date", () => {
    const startDate = moment().add(4,"months");
    const endDate = moment().add(8,"months");
    content.find("withStyles(DateRangePicker)").prop("onDatesChange")({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("it should handle focus change", () => {
    const calendarFocused = "endDate";
    content.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
    expect(content.state("calendarFocused")).toBe(calendarFocused);    
});
