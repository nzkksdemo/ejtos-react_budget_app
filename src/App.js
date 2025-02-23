import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row my-3 py-2' style={{backgroundColor: '#e7e7e7'}}>
                    <div className='col-lg d-flex align-items-center mb-3 mb-lg-0'>
                        <Budget />
                    </div>

                    <div className='col-lg d-flex align-items-center mb-3 mb-lg-0'>
                        <Remaining />
                    </div>

                    <div className='col-lg d-flex align-items-center mb-3 mb-lg-0'>
                        <ExpenseTotal />
                    </div>
                    
                    <div className='col-lg d-flex align-items-center mb-2 mb-lg-0'>
                        <CurrencyDropdown />
                    </div>
                </div>

                <h4 className='mt-5'>Allocation</h4>
                <div>
                    <ExpenseList />
                </div>

                <h4 className='mt-5'>Change Allocation</h4>
                <div className='mt-3' style={{backgroundColor: '#e7e7e7'}}>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
