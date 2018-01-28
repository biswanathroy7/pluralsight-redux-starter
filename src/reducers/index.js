import { combineReducers } from 'redux';
import expenseTypes from "./expenseTypeReducer";
import expenseMasters from "./expenseMasterReducer";

const rootReducer = combineReducers({
    expenseTypes,
    expenseMasters
});

export default rootReducer;