import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expenseMasterActions from '../../actions/expenseMasterActions';

export class DeleteExpenseMasterPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.deleteExpenseMaster = this.deleteExpenseMaster.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    deleteExpenseMaster(event) {
        event.preventDefault();
        this.props.actions.deleteExpenseMaster(this.props.expenseMasterId).then(() => this.redirect());
    }

    cancel(event){
        event.preventDefault();
        this.redirect();
    }

    redirect() {
        this.context.router.push('/expensemasters');
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
                    onClick={this.deleteExpenseMaster} />
            </div>
        );
    }
}


DeleteExpenseMasterPage.contextTypes = {
    router: PropTypes.object
};

DeleteExpenseMasterPage.propTypes = {
    expenseMasterId: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const expenseMasterId = Number.parseInt(ownProps.params.id);
    return {
        expenseMasterId: expenseMasterId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseMasterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpenseMasterPage);