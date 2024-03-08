import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType} w-100 p-2`} style={{marginBottom: 0}}>
            <span>Remaining: <b>{currency}{budget - totalExpenses}</b></span>
        </div>
    )
};

export default Remaining;