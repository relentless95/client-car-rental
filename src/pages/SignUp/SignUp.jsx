import React from 'react'
import "./SignUp.scss"

function SignUp() {
  return (
    <>
    <section className="signup-page">
      <div className="container">
        <div className="signup-container">
        <div className="signup-container-inner">
          <form action="#" className="signup-form">
            <div className="signup-form__title">
              <h2>sign up</h2>
            </div>

            <div className="signup-form_group">
              <input
                type="email"
                className="signup-form__input"
                placeholder="Email"
                id="username"
                required
              />
              <label htmlFor="email" className="signup-form__label">
                Email
              </label>
            </div>
            <div className="signup-form_group">
              <input
                type="text"
                className="signup-form__input"
                placeholder="Username"
                id="username"
                required
              />
              <label htmlFor="username" className="signup-form__label">
                Username
              </label>
            </div>

            <div className="signup-form_group">
              <input
                type="text"
                className="signup-form__input"
                placeholder="Password"
                id="password"
                required
              />
              <label htmlFor="password" className="signup-form__label">
                Password
              </label>
            </div>

            <div className="signup-form-group">
              <button className="btn">signup</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>

  </>
  );
}

export default SignUp