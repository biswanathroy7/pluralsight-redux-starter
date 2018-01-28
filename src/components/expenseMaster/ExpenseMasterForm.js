import React, { PropTypes } from 'react';
import TextInput from '../../common/TextInput';
import DateInput from '../../common/DateInput';

const ExpenseMasterForm = ({ expenseMaster, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <h1>Manager Expense Types</h1>
            <TextInput
                name="name"
                label="Name"
                value={expenseMaster.name}
                onChange={onChange}
            />

            <DateInput
                name="startDate"
                label="Start Date"
                value={expenseMaster.startDate}
                onChange={onChange}
            />

            <DateInput
                name="endDate"
                label="End Date"
                value={expenseMaster.endDate}
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

ExpenseMasterForm.propTypes = {
    expenseMaster: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default ExpenseMasterForm;