import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const {totalExpenses} = useContext(AppContext);

    return (
        <div className="alert alert-primary w-100" style={{marginBottom: 0}}>
            <span>Spent so far: <b>£{totalExpenses}</b></span>
        </div>
    );
};

export default ExpenseTotal;