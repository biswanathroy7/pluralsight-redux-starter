import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ExpenseTypePage from './components/expenseType/ExpenseTypePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExpenseTypePage} />
  </Route>
);
