import React, {PropTypes} from 'react';
import ExpenseTypeListRow from './ExpenseTypeListRow';

const ExpenseTypeList = ({expenseTypes}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {expenseTypes.map(expenseType =>
        <ExpenseTypeListRow key={expenseType.id} expenseType={expenseType}/>
      )}
      </tbody>
    </table>
  );
};

ExpenseTypeList.propTypes = {
    expenseTypes: PropTypes.array.isRequired
};

export default ExpenseTypeList;
