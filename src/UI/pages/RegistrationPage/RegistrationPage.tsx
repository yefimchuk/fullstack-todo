import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./RegistrationPage.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterData } from "../../../BLL/registerUser/registerUser.slice";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";
import { selectErrors, selectStatus } from "../../../BLL/registerUser/registerUser.selector";

function RegistrationPage() {
    const errors = useSelector(selectErrors);

    const dispatch = useDispatch();
    const [err, setErr] = useState('');
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    if (status) {
        navigate('/login', {replace: true});
    }
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {

            if (values.confirmPassword === values.password) {
                setErr('');
                const res = await dispatch(fetchRegisterData(values));
                res.payload.status === 201 && setStatus(true);
            } else {
                setErr('passwords do not match');

            }
        },
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="registration-page">
                    <div className="col s12">
                        <h2 className="purple-text ">Registration</h2>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate purple-text"
                                    type="email"
                                    required={true}
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
                                    className="validate purple-text"
                                    type="password"
                                    name="password"
                                    required={true}
                                    id="password"
                                    defaultValue={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="password">Enter your password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    className="validate purple-text"
                                    required={true}
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
                                className="btn waves-effect waves-light indigo text-lighten-3 "
                                type="submit"
                                name="action"
                            >
                                Registration
                            </button>
                            <NavLink to="/login" className="btn-outline btn-reg have-acc indigo-text text-lighten-3 ">
                                Already have account?
                            </NavLink>
                        </div>

                    </div>
                </div>

            </form>
            {err && <Error error={err}/>}
            {!err && errors && <Error error={errors}/>}

        </div>
    );
}

export default RegistrationPage;
