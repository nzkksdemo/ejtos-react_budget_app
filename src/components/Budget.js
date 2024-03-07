import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = e => {
        setNewBudget(e.target.value);
    };

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="budget" className="form-label m-0">Budget: £{budget}</label>
            </div>
            <div className="col-auto">
                <input id="budget" className="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
            </div>
        </div>
    );
};

export default Budget;