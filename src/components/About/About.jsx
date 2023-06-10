import React from "react";
import "./About.scss";
import car from "../../../public/images/about/parked_cars-2.jpg";

function About() {
  return (
    <>
      {/* <div>About</div> */}
      <section className="about-section">
        <div className="container">
          <div className="about-main-first">
            {/* insert parked cars here */}
            <div className="about-main-first__img">
              <img src={car} alt="parked cars" />
            </div>

            <div className="about-main-first__text">
              <h3>About us</h3>

              <h2>More than 150+ special collection cars</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                beatae totam id perspiciatis quas, quasi vitae porro voluptatum
                autem quia quisquam magni maxime dolorem at reiciendis pariatur
                voluptate amet esse? Perferendis, ab necessitatibus.
              </p>
              <button className="about-main-first__text-button">
                See all our cars
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
