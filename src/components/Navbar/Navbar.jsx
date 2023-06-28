import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  MdOutlineAccountCircle,
  // MdOutlineManageHistory,
  // MdOutlineManageAccounts,
  // MdOutlineCreditCard,
  // MdOutlineQuestionAnswer,
  // MdLogout,
} from "react-icons/md";

function Navbar() {
  const { isLoggedIn, user, logOutUser, refreshData } = useContext(AuthContext);
  // refreshData()
  // console.log("isLoggedIn from navbar---->", isLoggedIn)
  console.log("user from navbar---->", user);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__img">
          <Link to="/">
            <img
              src={"/images/logo/png/logo-no-background-new.png"}
              alt="logo-img"
            />
          </Link>
        </div>

        {/* to be deleted start */}

        {isLoggedIn ? (
          <div className="navbar__btns">
            <Link to="/profile" className="navbar__btns__profile-link">
              <MdOutlineAccountCircle />
              {user && user.username}
            </Link>
            {/* <ul className="#">
                <Link>Manage Bookings</Link>
                <Link>Personal information</Link>
                <Link>Booking profiles</Link>
                <Link>Help</Link>
              </ul> */}
            |
            <Link
              to="/"
              className="navbar__btns__logout-link"
              onClick={logOutUser}
            >
              logout
            </Link>
          </div>
        ) : (
          <div className="navbar__btns">
            <Link to="/login" className="navbar__btns__login-link">
              Log in
            </Link>
            |
            <Link to="/signup" className="navbar__btns__signup-link">
              Sign up
            </Link>
          </div>
        )}

        {/* to be deleted end */}

        {/* {isLoggedIn && (
          <>
            <div className="navbar__btns">
              <Link to="/profile" className="navbar__btns__profile-link">
                <MdOutlineAccountCircle />
                {user && user.username}
              </Link>
              <ul className="#">
                <Link>Manage Bookings</Link>
                <Link>Personal information</Link>
                <Link>Booking profiles</Link>
                <Link>Help</Link>
              </ul>
              |
              <Link
                to="/"
                className="navbar__btns__logout-link"
                onClick={logOutUser}
              >
                logout
              </Link>
            </div>
          </>
        )}

        {!isLoggedIn && (
          <>
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
                className={({ isActive }) =>
                  isActive ? "testimonial-link" : ""
                }
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
              <Link to="/signup" className="navbar__btns__signup-link">
                Sign up
              </Link>
            </div>
          </>
        )} */}
      </nav>
    </>
  );
}

export default Navbar;
