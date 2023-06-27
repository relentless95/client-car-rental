import React, { useState } from "react";
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, username };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        // console.log("here response---->", response)
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <section className="signup-page">
        {/* <div className="container"> */}
        <div className="signup-container">
          <div className="signup-container-inner">
            <form onSubmit={handleSignupSubmit} className="signup-form">
              <div className="signup-form__title">
                <h2>sign up</h2>
              </div>

              <div className="signup-form_group">
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  className="signup-form__input"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
                <label htmlFor="email" className="signup-form__label">
                  Email
                </label>
              </div>
              <div className="signup-form_group">
                <input
                  value={username}
                  onChange={handleUsername}
                  type="text"
                  className="signup-form__input"
                  placeholder="Username"
                  id="username"
                  name="username"
                  required
                />
                <label htmlFor="username" className="signup-form__label">
                  Username
                </label>
              </div>

              <div className="signup-form_group">
                <input
                  value={password}
                  onChange={handlePassword}
                  type="text"
                  className="signup-form__input"
                  placeholder="Password"
                  id="password"
                  name="password"
                  required
                />
                <label htmlFor="password" className="signup-form__label">
                  Password
                </label>
              </div>

              <div className="signup-form-group">
                <button className="btn" type="submit">
                  Sign up
                </button>
              </div>
            </form>

            <div className="signup-form_signup-link">
              {errorMessage && (
                <p className="error-message-universal">{errorMessage}</p>
              )}
              <p>Already have an account?</p>
              <button className="btn-black">
                <Link to={"/login"}> Login</Link>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default SignUp;
