import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { handleNumberOnlyValidation } from '../utilities/inputValidation';

const AllocationForm = ({}) => {
    const {dispatch, remaining, currency} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds  £${remaining}`);
            setCost("");
            return;
        }

        const expense = {name, cost: parseInt(cost)};

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });
        }
    };

    return (
        <div className='row d-flex align-items-center p-2'>
            <div className='col-lg mb-3 mb-lg-0'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="form-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className='col-lg mb-3 mb-lg-0'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="form-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                </div>
            </div>
            <div className='col-lg mb-3 mb-lg-0'>
                <div className="input-group">
                    <span className="input-group-text" id="cost-currency">{currency}</span>
                    <input
                        required='required'
                        id='cost'
                        type="number"
                        onKeyPress={handleNumberOnlyValidation}
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        className='form-control'
                        aria-label="cost"
                        aria-describedby="cost-currency"
                    />
                    <button 
                        className="btn btn-primary" 
                        onClick={submitEvent} 
                    >Save</button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;