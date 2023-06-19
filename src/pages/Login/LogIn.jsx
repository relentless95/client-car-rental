// import React from 'react'
import "./Login.scss";

function LogIn() {
  return (
    <>
      <section className="login-page">
        <div className="container">
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
                <label htmlFor="username" className="login-form__label">
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
                <button className="btn">login</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
}

export default LogIn;
