import React, {PropTypes} from 'react';
import ExpenseMasterListRow from './ExpenseMasterListRow';

const ExpenseMasterList = ({expenseMasters}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
      </thead>
      <tbody>
      {expenseMasters.map(expenseMaster =>
        <ExpenseMasterListRow key={expenseMaster.id} expenseMaster={expenseMaster}/>
      )}
      </tbody>
    </table>
  );
};

ExpenseMasterList.propTypes = {
    expenseMasters: PropTypes.array.isRequired
};

export default ExpenseMasterList;
