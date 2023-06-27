// import React from 'react'
import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

function LogIn() {
  const [errorMessage, setErrorMessage] = useState(undefined);


  return (
    <>
      <section className="login-page">
        {/* <div className="container"> */}
          <div className="login-container">
          <div className="login-container-inner">
            <form action="#" className="login-form">
              <div className="login-form__title">
                <h2>Login</h2>
              </div>
              <div className="login-form_group">
                <input
                  type="text"
                  className="login-form__input"
                  placeholder="Email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="login-form__label">
                  email
                </label>
              </div>

              <div className="login-form_group">
                <input
                  type="text"
                  className="login-form__input"
                  placeholder="Password"
                  id="password"
                  required
                />
                <label htmlFor="password" className="login-form__label">
                  Password
                </label>
              </div>

              <div className="login-form-group">
                <button className="btn">Login</button>
              </div>
            </form>
            <div className="login-form_login-link">
                {errorMessage && (
                  <p className="error-message-universal">{errorMessage}</p>
                )}
                <p>Dont have an account?</p>
                <button className="btn-black">
                  <Link to={"/signup"}> Sign up</Link>
                </button>
              </div>
            
            </div>
          </div>
        {/* </div> */}
      </section>
  
    </>
  );
}

export default LogIn;
