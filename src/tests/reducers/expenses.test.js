import {expensesReducer} from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set defualt state', () => {
    const state = expensesReducer(undefined,{type:  "@@INIT"});
    expect(state).toEqual([]);
});

test("should delete a valid expense by id", () => {
    const action = {
        type: "DELETE_EXPENSE",
        expenseId: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not delete any expense when an invalid id is passed", () => {
    const action = {
        type: "DELETE_EXPENSE",
        expenseId: 27
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test("should add an expense", () => {
    const newExpense = {
        "id" : 4,
        "createdAt" : 2020,
        "description" : "BESCOM Bill",
        "note": "2nd Floor",
        "amount":5033
    };
    const action = {
        type: "ADD_EXPENSE",
        expense : newExpense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, newExpense]);
})

test("should modify an expense based of valid id", () => {
    
    const action = {
        type: "EDIT_EXPENSE",
        expense : 3,
        updates: {
            note : "July 2020"
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[2].note).toEqual(action.updates.note);
})

test("should modify an expense based of valid id", () => {
    
    const action = {
        type: "EDIT_EXPENSE",
        expense : -1,
        updates: {
            note : "July 2020"
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})


