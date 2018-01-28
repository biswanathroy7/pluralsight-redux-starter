import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expenseTypeActions from '../../actions/expenseTypeActions';
import toastr from 'toastr';

export class DeleteExpenseTypePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.deleteExpenseType = this.deleteExpenseType.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    deleteExpenseType(event) {
        event.preventDefault();
        this.props.actions.deleteExpenseType(this.props.expenseTypeId).then(() => this.redirect());
    }

    cancel(event){
        event.preventDefault();
        this.redirect();
    }

    redirect() {
        toastr.success('Expense Type Deleted');
        this.context.router.push('/expensetypes');
    }

    render() {
        return (
            <div>
                <h1>Are you sure you want to delete?</h1>
                <input
                    type="submit"
                    value="Cancel"
                    className="btn"
                    onClick={this.cancel} />
                <input
                    type="submit"
                    value="Delete"
                    className="btn btn-primary"
                    onClick={this.deleteExpenseType} />
            </div>
        );
    }
}


DeleteExpenseTypePage.contextTypes = {
    router: PropTypes.object
};

DeleteExpenseTypePage.propTypes = {
    actions: PropTypes.object.isRequired,
    expenseTypeId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    const expenseTypeId = Number.parseInt(ownProps.params.id);
    return {
        expenseTypeId: expenseTypeId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseTypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpenseTypePage);