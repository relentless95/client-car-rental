import React from "react";
import { Link } from "react-router-dom";
import "./HeroPages.scss";

function HeroPages({ name }) {
  return (
    <section className="hero-pages">
      <div className="hero-pages__overlay">
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home </Link>/ {name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPages;
