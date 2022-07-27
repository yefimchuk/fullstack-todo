import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../LoginPage/LoginPage.scss";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { fetchLoginData, login } from "../../../BLL/loginUser/loginUser.slice";

function LoginPage() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            dispatch(fetchLoginData(values));
        },
    });
    return (
        <div className="container">
            <div className="login-page">
                <form className="col s12" onSubmit={formik.handleSubmit}>

                    <h3>Login</h3>

                    <div className="row">
                        <div className="input-field col s12">
                            <input className="validate" type="email" name="email" id="email"
                                   defaultValue={formik.values.email}
                                   onChange={formik.handleChange}/>
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
                                defaultValue={formik.values.password}
                                onChange={formik.handleChange}
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
