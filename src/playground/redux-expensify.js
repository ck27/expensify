import {createStore, combineReducers} from "redux";

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

let expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action){
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
}

const expensesStore = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

console.log(expensesStore.getState());