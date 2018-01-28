import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function expenseMasterReducer(state = initialState.expenseMasters, action) {
  switch (action.type) {
    case types.LOAD_EXPENSE_MASTERS_SUCCESS:
      return action.expenseMasters;

    case types.CREATE_EXPENSE_MASTER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.expenseMaster)
      ];

    case types.UPDATE_EXPENSE_MASTER_SUCCESS:
      return [
        ...state.filter(expenseMaster => expenseMaster.id !== action.expenseMaster.id),
        Object.assign({}, action.expenseMaster)
      ];

    case types.DELETE_EXPENSE_MASTER_SUCCESS:
      return [
        ...state.filter(expenseMaster => expenseMaster.id !== action.expenseMasterId)
      ];
    default:
      return state;
  }
}
