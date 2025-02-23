import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, totalExpenses, currency} = useContext(AppContext);
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
        <div className="d-flex align-items-center">
            <label htmlFor="budget" className="form-label m-0">Budget:</label>
            <div className="d-flex align-items-center">
                <div className="input-group">
                    <span className="input-group-text" id="budgetCurrency">{currency}</span>
                    <input id="budget" className="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange}  aria-label="budget" aria-describedby="budgetCurrency" />
                </div>
            </div>
        </div>
    );
};

export default Budget;