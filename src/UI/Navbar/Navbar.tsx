import React from 'react';
import './navbar.scss'
function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="src/UI/Navbar/Navbar#" className="brand-logo">MERN Todo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;