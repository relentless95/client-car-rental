import React, { useState } from "react";

function CarContainer({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  console.log("carID ------>", carID)

  return (
    <>
      {data[carID].map((car, id) => {
        return (
          
            <div key={id} className="box-cars">
              {/* car */}
              <div className="select-car">
                {carLoad && <span className="loader"></span>}
                <img
                  src={car.img}
                  alt="car_img"
                  onLoad={() => setCarLoad(false)}
                />
              </div>
              {/* description */}
              <div className="select-description">
                <div className="select-description__price">
                  <span>${car.price}</span>/ rent per day
                </div>
                <div className="select-description__table">
                  <div className="select-description__table__col">
                    <span>Model</span>
                    <span>{car.model}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>make</span>
                    <span>{car.make}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>Year</span>
                    <span>{car.year}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>Doors</span>
                    <span>{car.doors}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>Seats</span>
                    <span>{car.seats}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>AC</span>
                    <span>{car.air}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>Transmission</span>
                    <span>{car.transmission}</span>
                  </div>

                  <div className="select-description__table__col">
                    <span>Fuel</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
                {/* btn cta */}
                <a href="#booking-section" className="cta-btn">
                  Reserve Now
                </a>
              </div>
            </div>
          
        );
      })}
    </>
  );
}

export default CarContainer;
