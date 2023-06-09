import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>Autos</span>
            </li>
            <li>
              We offer a wide range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:+49 123 456 789">
                <MdLocalPhone /> &nbsp;+49 123 456 789
              </a>
            </li>

            <li>
              <a href="mailto:autos@gmail.com ">
                <MdEmail />
                &nbsp; autos@gmail.com
              </a>
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://someone.dev">
                Designed by a passionate guy
              </a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Company</li>

            <li>
              <a href="#home">Munich</a>
            </li>

            <li>
              <a href="#home">Careers</a>
            </li>

            <li>
              <a href="#home">Mobile</a>
            </li>

            <li>
              <a href="#home">Blog</a>
            </li>

            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
            <li>Sat: 9: 00A M - 19:00 PM</li>
            <li>Sun: Closed</li>
          </ul>

          <ul className="footer-content__2">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button className="submit-email">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
