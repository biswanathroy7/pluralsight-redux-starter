import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseMasterForm from './ExpenseMasterForm';
import * as expenseMasterActions from '../../actions/expenseMasterActions';
import toastr from 'toastr';


export class ManageExpenseMasterPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expenseMaster: Object.assign({}, props.expenseMaster),
            errors: {},
            saving: false
        };

        this.updateExpenseMasterState = this.updateExpenseMasterState.bind(this);
        this.saveExpenseMaster = this.saveExpenseMaster.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.expenseMaster.id != nextProps.expenseMaster.id) {
            this.setState({ expenseMaster: Object.assign({}, nextProps.expenseMaster) });
        }
    }

    updateExpenseMasterState(event) {
        const field = event.target.name;
        let expenseMaster = Object.assign({}, this.state.expenseMaster);
        expenseMaster[field] = event.target.value;
        return this.setState({ expenseMaster: expenseMaster });
    }

    saveExpenseMaster(event) {
        event.preventDefault();
        this.setState({ saving: true });

        this.props.actions.saveExpenseMaster(this.state.expenseMaster)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.push('/expensemasters');
    }

    render() {
        return (
            <ExpenseMasterForm
                expenseMaster={this.state.expenseMaster}
                onChange={this.updateExpenseMasterState}
                onSave={this.saveExpenseMaster}
                saving={this.state.saving} />

        );
    }
}

function getExpenseMasterById(expenseMasters, id) {
    const expenseMaster = expenseMasters.filter(expenseMaster => expenseMaster.id == id);
    if (expenseMaster) return expenseMaster[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const expenseMasterId = ownProps.params.id;

    let expenseMaster = { id: '', name: '' };

    if (expenseMasterId && state.expenseMasters.length > 0) {
        expenseMaster = getExpenseMasterById(state.expenseMasters, expenseMasterId);
    }
    return {
        expenseMaster: expenseMaster
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseMasterActions, dispatch)
    };
}

ManageExpenseMasterPage.propTypes = {
    expenseMaster: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
  

ManageExpenseMasterPage.contextTypes = {
    router: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(ManageExpenseMasterPage);