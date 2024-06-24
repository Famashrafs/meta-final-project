import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';

function Header() {
    return (
        <header className="container">
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;