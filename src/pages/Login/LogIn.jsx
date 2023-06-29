// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const API_URL = "http://localhost:5005";

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser().then(() => {
          console.log("something3");
          navigate("/profile");
          console.log("check response.data.authToken---->", response.data);
        });
        // navigate("/profile");

        // storeToken(response.data.authToken);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <section className="login-page">
        {/* <div className="container"> */}
        <div className="login-container">
          <div className="login-container-inner">
            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="login-form__title">
                <h2>Login</h2>
              </div>
              <div className="login-form_group">
                <input
                  value={email}
                  onChange={handleEmail}
                  type="text"
                  className="login-form__input"
                  placeholder="Email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="login-form__label">
                  Email
                </label>
              </div>

              <div className="login-form_group">
                <input
                  value={password}
                  onChange={handlePassword}
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
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
            <div className="login-form_login-link">
              {errorMessage && (
                <p className="error-message-universal">{errorMessage}</p>
              )}
              <p>Don't have an account?</p>
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
