import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = e => {
        setNewBudget(e.target.value);
    };

    return (
        <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for="budget" class="form-label m-0">Budget: £{budget}</label>
            </div>
            <div class="col-auto">
                <input id="budget" class="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
            </div>
        </div>
    );
};

export default Budget;