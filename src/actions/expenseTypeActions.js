import ExpenseTypeApi from "../api/mockExpenseTypeApi";
import * as types from "./actionTypes";

export function loadExpenseTypesSuccess(expenseTypes) {
    return {
        type: types.LOAD_EXPENSE_TYPES_SUCCESS,
        expenseTypes
    };
}

export function createExpenseTypeSuccess(expenseType) {
    return { type: types.CREATE_EXPENSE_TYPE_SUCCESS, expenseType };
}

export function updateExpenseTypeSuccess(expenseType) {
    return { type: types.UPDATE_EXPENSE_TYPE_SUCCESS, expenseType };
}

export function deleteExpenseTypeSuccess(expenseTypeId) {
    return { type: types.DELETE_EXPENSE_TYPE_SUCCESS , expenseTypeId};
}

export function loadExpenseTypes() {
    return dispatch => {
        return ExpenseTypeApi.getAllExpenseTypes().then(expenseTypes => {
            dispatch(loadExpenseTypesSuccess(expenseTypes));
        }).catch(error => {
            throw (error)
        });
    };
}

export function saveExpenseType(expenseType) {
    return function (dispatch, getState) {
        return ExpenseTypeApi.saveExpenseType(expenseType).then(expenseType => {
            expenseType.id ? dispatch(updateExpenseTypeSuccess(expenseType)) :
                dispatch(createExpenseTypeSuccess(expenseType));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteExpenseType(id) {
    return function (dispatch, getSate) {
        return ExpenseTypeApi.deleteExpenseType(id).then(data => {
            dispatch(deleteExpenseTypeSuccess(id));
        }).catch(error => {
            throw (error);
        });
    };
}
