import React from 'react';
import './navbar.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../BLL/loginUser/loginUser.selector";
import { logout } from "../../../BLL/loginUser/loginUser.slice";

function Navbar() {
    const isLogin = useSelector(selectToken);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="src/UI/Navbar/Navbar#" className="indigo-text text-lighten-3 brand-logo">MERN Todo</a>
                <ul id="nav-mobile" className="right">
                    {isLogin && <li className='icon_container'><a className='material-icons red-text ' onClick={handleLogout}>exit_to_app </a></li>}
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {isLogin && <li ><h5 className='indigo-text text-lighten-3' onClick={handleLogout}>Log out</h5></li>}
                           </ul>


            </div>
        </nav>
    );
}

export default Navbar;