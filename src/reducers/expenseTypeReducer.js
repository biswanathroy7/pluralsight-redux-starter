import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function expenseTypeReducer(state = initialState.expenseTypes, action) {
  switch (action.type) {
    case types.LOAD_EXPENSE_TYPES_SUCCESS:
      return action.expenseTypes;

    default:
      return state;
  }
}
