import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseTypeForm from './ExpenseTypeForm';
import * as expenseTypeActions from '../../actions/expenseTypeActions';
import toastr from 'toastr';


export class ManageExpenseTypePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expenseType: Object.assign({}, props.expenseType),
            errors: {},
            saving: false
        };

        this.updateExpenseTypeState = this.updateExpenseTypeState.bind(this);
        this.saveExpenseType = this.saveExpenseType.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.expenseType.id != nextProps.expenseType.id) {
            this.setState({ expenseType: Object.assign({}, nextProps.expenseType) });
        }
    }

    updateExpenseTypeState(event) {
        const field = event.target.name;
        let expenseType = Object.assign({}, this.state.expenseType);
        expenseType[field] = event.target.value;
        return this.setState({ expenseType: expenseType });
    }

    saveExpenseType(event) {
        event.preventDefault();
        this.setState({ saving: true });

        this.props.actions.saveExpenseType(this.state.expenseType)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Expense Type saved');
        this.context.router.push('/expensetypes');
    }

    render() {
        return (
            <ExpenseTypeForm
                expenseType={this.state.expenseType}
                onChange={this.updateExpenseTypeState}
                onSave={this.saveExpenseType}
                saving={this.state.saving} />

        );
    }
};

function getExpenseTypeById(expenseTypes, id) {
    const expenseType = expenseTypes.filter(expenseType => expenseType.id == id);
    if (expenseType) return expenseType[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const expenseTypeId = ownProps.params.id;

    let expenseType = { id: '', name: '' };

    if (expenseTypeId && state.expenseTypes.length > 0) {
        expenseType = getExpenseTypeById(state.expenseTypes, expenseTypeId);
    }
    return {
        expenseType: expenseType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseTypeActions, dispatch)
    };
}

ManageExpenseTypePage.contextTypes = {
    router: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageExpenseTypePage);