import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expenseMasterActions from '../../actions/expenseMasterActions';
import ExpenseMasterList from './ExpenseMasterList';

class ExpenseMasterPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/expensemaster');
    }

    render() {
        const { expenseMasters } = this.props;
        return (
            <div className="jumbotron">
                <h1>Expense Type</h1>
                <input type="submit"
                    value="Add ExpenseMaster"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <ExpenseMasterList expenseMasters={expenseMasters} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        expenseMasters: state.expenseMasters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(expenseMasterActions, dispatch)
    };
}

ExpenseMasterPage.propTypes = {
    expenseMasters: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseMasterPage);
