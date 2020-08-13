import getExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";


test("should get expenses based on text filter 'Bill'", () => {
    const filteredExpenses = getExpenses(expenses,{ text : "Bill"});
    expect(filteredExpenses).toEqual([
        expenses[1],
        expenses[2]
    ]);
});

test("should get expenses based on text filter 'Rent'", () => {
    const filteredExpenses = getExpenses(expenses,{ text : "Rent"});
    expect(filteredExpenses).toEqual([
        expenses[0]
    ]);
});

test("should get expenses based on startDate filter", () => {
    const filters = {
        "text":"",
        "startDate" : moment(0),
        "endDate": undefined,
        "sortBy": "date"
    };

    const filteredExpenses = getExpenses(expenses,filters);
    expect(filteredExpenses).toEqual([
        expenses[2],
        expenses[1]
    ]);
});

test("should get expenses based on startDate and endDate filter", () => {
    const filters = {
        "text":"",
        "startDate" : undefined,
        "endDate": moment(0).add(5,"days"),
        "sortBy": "date"
    };

    const filteredExpenses = getExpenses(expenses,filters);
    expect(filteredExpenses).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ]);
});

test('should sort by date', () => {
    const filters = {
        sortBy : "date"
    };
    const filteredExpenses = getExpenses(expenses,filters);
    expect(filteredExpenses).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ])
});

test('should sort by amount', () => {
    const filters = {
        sortBy : "amount"
    };
    const filteredExpenses = getExpenses(expenses,filters);
    expect(filteredExpenses).toEqual([
        expenses[0],
        expenses[2],
        expenses[1]
    ])
});

