import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const currencies = {
    '$': '$ Dollar',
    '£': '£ Pound',
    '€': '€ Euro',
    '₹': '₹ Rupee'
};

const CurrencyDropdown = () => {
    const {dispatch, currency} = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const setCurrency = (e, val) => {
        setShowDropdown(false);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: val.charAt(0)
        });
    }

    return (
        <div className="d-flex align-items-center">
            <div className="dropdown currency-dropdown w-100">
                <button className="btn dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>{`Currency (${currencies[currency]})`}</button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                    <li><span className="dropdown-item" onClick={e => setCurrency(e, "$ Dollar")}>$ Dollar</span></li>
                    <li><span className="dropdown-item" onClick={e => setCurrency(e, "£ Pound")}>£ Pound</span></li>
                    <li><span className="dropdown-item" onClick={e => setCurrency(e, "€ Euro")}>€ Euro</span></li>
                    <li><span className="dropdown-item" onClick={e => setCurrency(e, "₹ Rupee")}>₹ Rupee</span></li>
                </ul>
            </div>
        </div>
    );
}

export default CurrencyDropdown;