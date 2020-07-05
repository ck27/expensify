const expensesReducerDefaultState = [];

export const expensesReducer = (state = expensesReducerDefaultState, action) => {
    console.log(state);
    console.log(action);
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
                console.log("EDITING");
                console.log(exp);
                if(exp.id == action.expense) {
                    return {
                        ...exp,
                        ...action.updates
                    };
                } else {
                    return exp;
                }
            });
        default:
            return state;
    }

};
