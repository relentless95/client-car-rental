import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="overlay">
          <div className="container">
            <img
              src={"#"}
              // src={"/images/hero/bg-hero.png"}
              alt="bg-shape"
              className="bg-shape"
            />
            <div className="hero-content">
              <div className="hero-content__text">
                <h4>Drive your Dreams, Rent with Ease.</h4>
                <h1>
                  {" "}
                  Drive <span>more</span> spend <span>less</span>. Unbeatable
                  Deals on Car Rentals.
                </h1>
                <p>
                  Rent the car of your dreams. best prices, unlimited miles,
                  flexible pick-up options and more.
                </p>
                <div className="hero-content__text__btns">
                  <Link
                    // onClick={bookbtn}
                    className="hero-content__text__btns__book-ride"
                    to="/"
                  >
                    Book ride &nbsp;
                    <FaCheckCircle />
                  </Link>
                  <Link className="hero-content__text__btns__learn-more" to="/">
                    Learn more &nbsp;
                    <FaChevronRight className="chevron-right" />
                  </Link>
                </div>
              </div>
              {/* image */}
              <img
                src={"#"}
                // src={"/images/hero/tesla-hero2.png"}
                alt=""
                className="hero-content__car-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
