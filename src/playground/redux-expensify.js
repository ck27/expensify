import {createStore, combineReducers} from "redux";
import {v4 as uuidV4} from "uuid";

const demoState = {
    expenses : [{
        id:"lskjgasdf",
        description: "January Rent",
        note: "The is the rent for No 76",
        amount: 20000,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

let expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "DELETE_EXPENSE":
            return state.filter ( ( {id} ) => id !== action.expenseId );
        default:
            return state;
    }

};

let filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action) {
        default:
            return state;
    }
};


const addExpense = ( { description = "", note = "", amount= 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidV4(),
        description,
        note,
        amount,
        createdAt
    }
});

const deleteExpense = ( expenseId ) => ( {
    type:"DELETE_EXPENSE",
    expenseId
});

const expensesStore = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

expensesStore.subscribe( () => {
    console.log(expensesStore.getState());
});


const exp1 = expensesStore.dispatch( addExpense( { amount : 1000, description : "rent june 2020" }));
const exp2 = expensesStore.dispatch( addExpense( { amount : 500, description : "Shopping June 2020" }));

expensesStore.dispatch( deleteExpense( exp1.expense.id));