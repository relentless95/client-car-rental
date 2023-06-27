import React from "react";
import "./PlanTrip.scss";
import car from "/images/icons_plantrip/car.png";
import drive from "/images/icons_plantrip/drive.png";
import operator from "/images/icons_plantrip/operator.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                {/* add data inside src */}
                <div>
                  <img src={car} alt={"icon_img"} />
                </div>

                <h3>Select Car</h3>
                <p>
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box">
                {/* add data inside src */}
                <div>
                  <img src={operator} alt="icon_img" />
                </div>
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                {/* add data inside src */}
                <div>
                  <img src={drive} alt="" />
                </div>

                <h3>Let's Drive</h3>
                <p>
                  Whether you are hitting the open road, we have got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
