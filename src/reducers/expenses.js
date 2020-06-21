const expensesReducerDefaultState = [];

export const expensesReducer = (state = expensesReducerDefaultState, action) => {
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
