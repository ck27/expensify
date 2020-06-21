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
            return state.filter( ( {id} ) => id !== action.expenseId );

        case "EDIT_EXPENSE":
            return state.map( (exp) => {
                if(exp.id == action.expense.id) {
                    return {
                        ...exp,
                        ...action.expense
                    };
                } else {
                    return exp;
                }
            });
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
    switch(action.type) {
        case "TEXT_FILTER":
            return {
                ...state,
                text : action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate : action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }

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

const editExpense = ( expense ) => ({
    type: "EDIT_EXPENSE",
    expense
});

const setTextFilter = ( text = "" ) => ({
    type: "TEXT_FILTER",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate

});

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate

});

const expensesStore = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    return expenses.filter( (expense) => {
        const textMatch = !!expense.description && expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate  
        const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate  
        return textMatch && startDateMatch && endDateMatch;
    }).sort( (a, b) => {

        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

expensesStore.subscribe( () => {
    const state = expensesStore.getState();
    const expenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(expenses);
});


const exp1 = expensesStore.dispatch( addExpense( { amount : 1000, description : "rent june 2020", createdAt:2020 }));
const exp2 = expensesStore.dispatch( addExpense( { amount : 500, description : "Shopping June 2020", createdAt: -1989 }));
const exp3 = expensesStore.dispatch( addExpense( { amount : 500, description : "Fuel", createdAt: 2000 }));

// expensesStore.dispatch( deleteExpense( exp1.expense.id));
// expensesStore.dispatch( setTextFilter("sho"));

// const exp3 = expensesStore.dispatch( editExpense ( { 
//     ...exp2.expense,
//     amount: 800
// } ) );

// expensesStore.dispatch( setTextFilter());

expensesStore.dispatch( sortByAmount())

// expensesStore.dispatch( sortByDate());

// expensesStore.dispatch( setStartDate(2000) );
// expensesStore.dispatch( setStartDate() );
// expensesStore.dispatch( setEndDate(2020) );
