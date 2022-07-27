import React from 'react';
import './navbar.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../BLL/loginUser/loginUser.selector";
import { logout } from "../../BLL/loginUser/loginUser.slice";

function Navbar() {
    const isLogin = useSelector(selectToken);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="src/UI/Navbar/Navbar#" className="brand-logo">MERN Todo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {!isLogin ? <li><a>Sign up</a></li> : <li><a onClick={handleLogout}>Logout </a></li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;