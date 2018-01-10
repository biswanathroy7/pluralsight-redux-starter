import ExpenseTypeApi from "../api/mockExpenseTypeApi";
import * as types from "./actionTypes";

export function loadExpenseTypesSuccess(expenseTypes){
    return {
        type: types.LOAD_EXPENSE_TYPES_SUCCESS,
        expenseTypes
    };
}

export function loadExpenseTypes(){
    debugger;
    return dispatch => {
        return ExpenseTypeApi.getAllExpenseTypes().then(expenseTypes => {
            dispatch(loadExpenseTypesSuccess(expenseTypes));
        }).catch(error => {
            throw(error)
        });
    };
}
 