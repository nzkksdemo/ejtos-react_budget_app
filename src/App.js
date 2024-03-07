import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row my-3 py-2' style={{backgroundColor: '#e7e7e7'}}>
                    <div className='col-sm d-flex align-items-center mb-3 mb-sm-0'>
                        <Budget />
                    </div>

                    <div className='col-sm d-flex align-items-center mb-3 mb-sm-0'>
                        <Remaining />
                    </div>

                    <div className='col-sm d-flex align-items-center mb-2 mb-sm-0'>
                        <ExpenseTotal />
                    </div>
                </div>

                <h4>Allocation</h4>
                <div>
                    <ExpenseList />
                </div>

                <h4>Change Allocation</h4>
                <div>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
