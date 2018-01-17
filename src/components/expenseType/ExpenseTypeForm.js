import React, { PropTypes } from 'react';
import TextInput from '../../common/TextInput';

const ExpenseTypeForm = ({ expenseType, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <h1>Manager Expense Types</h1>
            <TextInput
                name="name"
                label="Name"
                value={expenseType.name}
                onChange={onChange}
            />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

ExpenseTypeForm.propTypes = {
    expenseType: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default ExpenseTypeForm;