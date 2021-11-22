import React from "react";
import { NavLink } from "react-router-dom";
import "./RegistrationPage.scss"
function RegistrationPage() {
  return (
    <div className="container">
      <div className="registration-page">
        <form className="col s12">
          <h3>Registration</h3>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="text"
                name="username"
                id="username"
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
              />
              <label htmlFor="password">Enter your password</label>
            </div>
            <div className="input-field col s12">
              <input
                className="validate"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
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
              Login
            </button>
            <NavLink to="/" className="btn-outline btn-reg have-acc">
              Already have account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
