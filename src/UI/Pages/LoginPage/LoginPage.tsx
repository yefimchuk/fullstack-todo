import React from "react";
import {NavLink} from "react-router-dom";
import "../LoginPage/LoginPage.scss"
function LoginPage() {
    return (
        <div className="container">
            <div className="login-page">
                <form className="col s12">

                    <h3>Login</h3>
                    <div className="row">
                        <div className="input-field col s12">
                            <input className="validate" type="email" name="email" id="email"/>
                            <label htmlFor="email">Enter your email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                className="validate"
                                type="password"
                                name="password"
                                id="password"
                            />
                            <label htmlFor="password">Enter your password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                        </button>
                        <NavLink to="reg" className="btn-outline btn-reg no-reg">not registered?</NavLink>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default LoginPage;
