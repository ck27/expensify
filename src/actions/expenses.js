import {v4 as uuidV4} from "uuid";

export const addExpense = ( { description = "", note = "", amount= 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidV4(),
        description,
        note,
        amount,
        createdAt
    }
});

export const deleteExpense = ( { id } = {} ) => ( {
    type:"DELETE_EXPENSE",
    id
});

export const editExpense = ( expense, updates ) => ({
    type: "EDIT_EXPENSE",
    expense,
    updates
});