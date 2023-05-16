import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="">
        <div>
          <Link to="/">
            <img
              src={"/images/logo/png/logo-no-background.png"}
              alt="logo-img"
            />
          </Link>
        </div>

        <ul className="navbar__lins">
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
            to=""
            className={({ isActive }) => (isActive ? "contact-link" : "")}
          >
            Contact
          </NavLink>
        </ul>

        <div className="navbar__btns">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "login-link" : "")}
          >
            Log in
          </NavLink>
          |
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "signup-link" : "")}
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
