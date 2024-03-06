import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = e => {
        setNewBudget(e.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            <span style={{marginRight: '10px'}}>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;