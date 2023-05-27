import React from "react";
import "./About.scss";
import car from "../../../public/images/about/parked_cars.jpg";

function About() {
  return (
    <>
      {/* <div>About</div> */}
      <section className="about-section">
        <div className="container">
          <div className="about-main">
            {/* insert parked cars here */}
            <div className="about-main__img">
              <img src={car} alt="parked cars" />
            </div>

            <div className="about-main__text">
              <h3>About us</h3>
             
              <h2>More than 150+ special collection cars</h2>
              <p>
                Get the car of your dreams with the installments of your choice.
                There are various attractive offers through our collaboration
                with various trusted leasing partners. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit aperiam quis vero, illo tempora aut accusantium obcaecati, quasi fuga error autem optio reiciendis, eius tenetur quam saepe tempore quisquam!
              </p>
              <button className="about-main__text-button">
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
