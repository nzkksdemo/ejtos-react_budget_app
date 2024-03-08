import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({id, name, cost}) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        });
    };

    const increaseAllocation = name => {
        const expense = {
            name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{currency}{cost}</td>
            <td><button onClick={event=> increaseAllocation(name)} className='imageButton'><img src="/plus-icon.png" alt="Increase" /></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;