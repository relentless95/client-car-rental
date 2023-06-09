import React from "react";
import "./ContactDetails.scss";

import {
  MdLocationPin,
  MdEmail,
  MdLocalPhone,
  MdOutgoingMail,
} from "react-icons/md";
import { Link } from "react-router-dom";

function ContactDetails() {
  return (
    <div className="contact-div">
      <div className="contact-div__text">
        <h2>Need additional information?</h2>
        <p>
          A multifaceted Professional Skilled in multiple fileds of reasearch,
          development as well as a learning specialist. over 20 years of
          experience
        </p>
        <Link to="/">
          <MdLocalPhone /> &nbsp; 0123 456 789
        </Link>

        <Link to="/">
          <MdEmail /> &nbsp; autos@gmail.com
        </Link>

        <Link to="/">
          <MdLocationPin /> &nbsp; Munich, Germany
        </Link>
      </div>

      <div className="contact-div__form">
        <form>
          <label>
            Full Name <b>*</b>
          </label>
          <input type="text" placeholder="E.g: John Doe" />

          <label>
            Email <b>*</b>
          </label>
          <input type="email" placeholder="youremail@example.com" />

          <label>
            Tell us about it <b>*</b>
          </label>
          <textarea placeholder="Write Here.."></textarea>

          <button type="submit">
            <MdOutgoingMail />
            &nbsp; Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
