import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <div className='Nototo'>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/popup">Popup</Link>
                </li>
                <li>
                <Link to="/useeffect">UseEffect</Link>
                </li>
                <li>
                <Link to="/usestate1">UseState1</Link>
                </li>
                <li>
                <Link to="/usereducer">UseReducer</Link>
                </li>
                <li>
                <Link to="/usememo">UseMemo</Link>
                </li>
                <li>
                <Link to="/usecallback">UseCallback</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;
    