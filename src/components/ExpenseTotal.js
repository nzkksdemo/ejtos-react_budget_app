import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const {totalExpenses, currency} = useContext(AppContext);

    return (
        <div className="alert alert-primary w-100 p-2" style={{marginBottom: 0}}>
            <span>Spent so far: <b>{currency}{totalExpenses}</b></span>
        </div>
    );
};

export default ExpenseTotal;