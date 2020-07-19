import {filtersReducer} from "../../reducers/filters";
import moment from "moment";

test('should set up default state values', () => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate:moment().endOf("month")
    });
});


test("should set up state for sortBy 'amount'", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT"})
    expect(state).toEqual({
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate:moment().endOf("month")
    });
});


test("should set up state for sortBy 'date'", () => {
    const action = { type: "SORT_BY_DATE"};
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe("date");
});

test("should set up state for textFilter", () => {
    const action = { type: "TEXT_FILTER", "text" : "Bill"};
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe("Bill");
});

test("should set up state for startDate", () => {
    const date = moment().startOf("month")
    const action = { type: "SET_START_DATE", "startDate" : date};
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(date);
});

test("should set up state for endDate", () => {
    const date = moment().endOf("month")
    const action = { type: "SET_END_DATE", "endDate" : date};
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(date);
});


