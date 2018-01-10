import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expenseTypeActions from '../../actions/expenseTypeActions';
import ExpenseTypeList from './ExpenseTypeList';

class ExpenseTypePage extends React.Component {
    render() {
        const { expenseTypes } = this.props;
        return (
            <div className="jumbotron">
                <h1>Expense Type</h1>
                <ExpenseTypeList expenseTypes={expenseTypes} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        expenseTypes: state.expenseTypes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(expenseTypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTypePage);
