import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function expenseTypeReducer(state = initialState.expenseTypes, action) {
  switch (action.type) {
    case types.LOAD_EXPENSE_TYPES_SUCCESS:
      return action.expenseTypes;

    case types.CREATE_EXPENSE_TYPE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.expenseType)
      ];

    case types.UPDATE_EXPENSE_TYPE_SUCCESS:
      return [
        ...state.filter(expenseType => expenseType.id !== action.expenseType.id),
        Object.assign({}, action.expenseType)
      ];

    case types.DELETE_EXPENSE_TYPE_SUCCESS:
      return [
        ...state.filter(expenseType => expenseType.id !== action.expenseTypeId)
      ];
    default:
      return state;
  }
}
