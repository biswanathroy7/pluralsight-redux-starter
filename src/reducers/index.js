import { combineReducers } from 'redux';
import expenseTypes from "./expenseTypeReducer";

const rootReducer = combineReducers({
    expenseTypes
});

export default rootReducer;