import {addExpense, editExpense, deleteExpense} from "../../actions/expenses";


test('should return deleteExpense object', () => {
    const action = { id: "1234asdf"};
    const result = deleteExpense(action);
    expect(result).toEqual({
        type: "DELETE_EXPENSE",
        id : "1234asdf" 
    });
});

test('should return editExpense object', () => {
    const updates = { note : "new notes"};
    const id = "1234";
    const result = editExpense(id, updates);
    expect(result).toEqual({
        type: "EDIT_EXPENSE",
        expense : "1234",
        updates : {
            note: "new notes"
        }
    });
});

test("should return addExpense object", () => {
    const expenseData = {
        amount: 10000,
        createdAt: 1000,
        note:"",
        description: "Rent"
    };

    const action = addExpense(expenseData);

    expect(action).toEqual( {
        type: "ADD_EXPENSE",
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
})


test('should return addExpense object with defaults', () => {
    const expenseData = {};

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense : {
            id: expect.any(String),
            amount:0,
            description:"",
            note: "",
            createdAt: 0
        }
    });
    
});
