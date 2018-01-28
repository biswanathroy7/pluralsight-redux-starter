import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from "moment";

const ExpenseMasterListRow = ({ expenseMaster }) => {
  return (
    <tr>
      <td><Link to={'/expensemaster/' + expenseMaster.id}>{expenseMaster.name}</Link></td>
      <td>{moment(expenseMaster.startDate).format('DD-MM-YYYY')}</td>
      <td>{moment(expenseMaster.endDate).format('DD-MM-YYYY')}</td>
      <td><Link to={'/deleteexpensemaster/' + expenseMaster.id}>Delete</Link></td>
    </tr>
  );
};

ExpenseMasterListRow.propTypes = {
  expenseMaster: PropTypes.object.isRequired
};

export default ExpenseMasterListRow;
