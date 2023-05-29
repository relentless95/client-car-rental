import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>save big with our cheap rental!</h2>
              <p>
                Top Airports. Local Suppliers. <span>24/7</span> support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
