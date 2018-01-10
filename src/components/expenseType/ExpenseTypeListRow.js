import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ExpenseTypeListRow = ({expenseType}) => {
  return (
    <tr>
      <td>{expenseType.name}</td>
    </tr>
  );
};

ExpenseTypeListRow.propTypes = {
    expenseType: PropTypes.object.isRequired
};

export default ExpenseTypeListRow;
