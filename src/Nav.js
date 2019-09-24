import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="Nav" >
            <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
                <h1>Logo</h1>
            </Link>

            <ul>
                <Link style={{ color: 'white' }} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={{ color: 'white' }} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;