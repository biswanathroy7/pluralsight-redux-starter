import ExpenseMasterApi from "../api/mockExpenseMasterApi";
import * as types from "./actionTypes";

export function loadExpenseMastersSuccess(expenseMasters) {
    return {
        type: types.LOAD_EXPENSE_MASTERS_SUCCESS,
        expenseMasters
    };
}

export function createExpenseMasterSuccess(expenseMaster) {
    return { type: types.CREATE_EXPENSE_MASTER_SUCCESS, expenseMaster };
}

export function updateExpenseMasterSuccess(expenseMaster) {
    return { type: types.UPDATE_EXPENSE_MASTER_SUCCESS, expenseMaster };
}

export function deleteExpenseMasterSuccess(expenseMasterId) {
    return { type: types.DELETE_EXPENSE_MASTER_SUCCESS , expenseMasterId};
}

export function loadExpenseMasters() {
    return dispatch => {
        return ExpenseMasterApi.getAllExpenseMasters().then(expenseMasters => {
            dispatch(loadExpenseMastersSuccess(expenseMasters));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveExpenseMaster(expenseMaster) {
    return function (dispatch, getState) {
        return ExpenseMasterApi.saveExpenseMaster(expenseMaster).then(expenseMaster => {
            expenseMaster.id ? dispatch(updateExpenseMasterSuccess(expenseMaster)) :
                dispatch(createExpenseMasterSuccess(expenseMaster));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteExpenseMaster(id) {
    return function (dispatch, getSate) {
        return ExpenseMasterApi.deleteExpenseMaster(id).then(data => {
            dispatch(deleteExpenseMasterSuccess(id));
        }).catch(error => {
            throw (error);
        });
    };
}
