import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import ExpenseTypePage from './components/expenseType/ExpenseTypePage';
import ManageExpenseTypePage from './components/expenseType/ManageExpenseTypePage';
import DeleteExpenseTypePage from './components/expenseType/DeleteExpenseTypePage';

import ExpenseMasterPage from './components/expenseMaster/ExpenseMasterPage';
import ManageExpenseMasterPage from './components/expenseMaster/ManageExpenseMasterPage';
import DeleteExpenseMasterPage from './components/expenseMaster/DeleteExpenseMasterPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExpenseTypePage} />
    <Route path="expensetypes" component={ExpenseTypePage} />
    <Route path="expensetype" component={ManageExpenseTypePage} />
    <Route path="expensetype/:id" component={ManageExpenseTypePage} />
    <Route path="deleteexpensetype/:id" component={DeleteExpenseTypePage} />

    <Route path="expensemasters" component={ExpenseMasterPage} />
    <Route path="expensemaster" component={ManageExpenseMasterPage} />
    <Route path="expensemaster/:id" component={ManageExpenseMasterPage} />
    <Route path="deleteexpensemaster/:id" component={DeleteExpenseMasterPage} />
  </Route>
);
