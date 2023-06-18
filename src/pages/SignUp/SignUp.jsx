import React from 'react'

function SignUp() {
  return (
    <>
      <section className="login-page">
        <div className="container">
          <div className="login-container">
            <form action="#" className="login-form">
              <div className="login-form_username">
                <h2>Log in</h2>
              </div>
              <div className="login-form_group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Username"
                  id="username"
                  required
                />
                <label htmlFor="username" className="form__label">
                  Full name
                </label>
              </div>

              <div className="login-form_group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="login-form_group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Password"
                  id="password"
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>

              <div className="login-form-group">
                <button className="btn">log in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp