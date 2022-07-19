import React from "react";
import {NavLink} from "react-router-dom";
import "./RegistrationPage.scss";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {fetchRegisterData} from "../../../BLL/registerUser/registerUser.slice";

function RegistrationPage() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {

            dispatch(fetchRegisterData(values))
        },
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="registration-page">
                    <div className="col s12">
                        <h3>Registration</h3>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    defaultValue={formik.values.userName}
                                    onChange={formik.handleChange}

                                />
                                <label htmlFor="username">Enter your username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue={formik.values.email}
                                    onChange={formik.handleChange}
                                />
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
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    defaultValue={formik.values.confirmPassword}
                                    onChange={formik.handleChange}

                                />
                                <label htmlFor="confirmPassword">Confirm your password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                            >
                                Registration
                            </button>
                            <NavLink to="/" className="btn-outline btn-reg have-acc">
                                Already have account?
                            </NavLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrationPage;
