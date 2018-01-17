import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ExpenseTypeListRow = ({ expenseType }) => {
  return (
    <tr>
      <td><Link to={'/expensetype/' + expenseType.id}>{expenseType.name}</Link></td>
      <td><Link to={'/deleteexpensetype/' + expenseType.id}>Delete</Link></td>
    </tr>
  );
};

ExpenseTypeListRow.propTypes = {
  expenseType: PropTypes.object.isRequired
};

export default ExpenseTypeListRow;
