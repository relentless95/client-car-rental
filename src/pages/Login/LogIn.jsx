// import React from 'react'
import BannerPages from "../../components/bannerPages/BannerPages";
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
                  User name
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
        </div>
      </section>
      {/* <BannerPages/> */}
    </>
  );
}

export default LogIn;
