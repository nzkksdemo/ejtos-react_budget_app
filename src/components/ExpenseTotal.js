import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className="alert alert-primary w-100" style={{marginBottom: 0}}>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;