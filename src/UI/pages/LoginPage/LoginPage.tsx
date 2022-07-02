import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.scss";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { fetchLoginData, login } from "../../../BLL/loginUser/loginUser.slice";
import { selectErrors } from "../../../BLL/loginUser/loginUser.selector";
import Error from "../../components/Error/Error";

function LoginPage() {
    const dispatch = useDispatch();
    const errors = useSelector(selectErrors);
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

                    <h2 className="purple-text ">Login</h2>

                    <div className="row">
                        <div className="input-field col s12">
                            <input className="validate input-value" type="email" name="email" id="email" required={true}
                                   defaultValue={formik.values.email}
                                   onChange={formik.handleChange}/>
                            <label htmlFor="email">Enter your email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                className="validate input-value"
                                type="password"
                                required={true}
                                name="password"
                                id="password"
                                defaultValue={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            <label  htmlFor="password">Enter your password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light indigo text-lighten-3 " type="submit" name="action">Login
                        </button>
                        <NavLink to="/reg" className="btn-outline btn-reg no-reg indigo-text text-lighten-3">Not registered?</NavLink>
                    </div>
                </form>
            </div>
            {errors && <Error error={errors}/>}
        </div>
    );
}

export default LoginPage;
