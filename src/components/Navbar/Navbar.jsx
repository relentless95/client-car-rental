import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/">
            <img
              src={"/images/logo/png/logo-no-background.png"}
              alt="logo-img"
            />
          </Link>
        </div>

        <ul className="navbar__links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "home-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "about-link" : "")}
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/models"
            className={({ isActive }) => (isActive ? "models-link" : "")}
          >
            Vehicle Models
          </NavLink>{" "}
          <NavLink
            to="/testimonials"
            className={({ isActive }) => (isActive ? "testimonial-link" : "")}
          >
            Testimonials
          </NavLink>{" "}
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? "team-link" : "")}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "contact-link" : "")}
          >
            Contact
          </NavLink>
        </ul>

        <div className="navbar__btns">
          <Link to="/login" className="navbar__btns__login-link">
            Log in
          </Link>
          |
          <Link
            to="/signup"
           
            className="navbar__btns__signup-link"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
