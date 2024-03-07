import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, totalExpenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = e => {
        setNewBudget(e.target.value);

        if (e.target.value > totalExpenses) {
            dispatch({
                type: 'SET_BUDGET',
                payload: e.target.value
            });
        } else {
            alert("You cannot reduce the budget value lower than the spending");
        }
    };

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="budget" className="form-label m-0">Budget:</label>
            </div>
            <div className="col-auto d-flex align-items-center">
                <div class="input-group">
                    <span class="input-group-text" id="budgetCurrency">£</span>
                    <input id="budget" class="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange}  aria-label="budget" aria-describedby="budgetCurrency" />
                </div>
            </div>
        </div>
    );
};

export default Budget;