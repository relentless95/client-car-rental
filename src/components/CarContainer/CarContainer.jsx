import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CarContainer({ data }) {
  const [carLoad, setCarLoad] = useState(true);
  // console.log("carID ------>", carID);
  console.log("data------->", data);

  return (
    <>
      {data && (
        <div className="box-cars">
          {/* car */}
          <div className="select-car">
            {carLoad && <span className="loader"></span>}
            <img
              src={data.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="select-description">
            <div className="select-description__price">
              <span>${data.price}</span>/ rent per day
            </div>
            <div className="select-description__table">
              <div className="select-description__table__col">
                <span>Model</span>
                <span>{data.model}</span>
              </div>

              <div className="select-description__table__col">
                <span>make</span>
                <span>{data.make}</span>
              </div>

              <div className="select-description__table__col">
                <span>Year</span>
                <span>{data.year}</span>
              </div>

              <div className="select-description__table__col">
                <span>Doors</span>
                <span>{data.doors}</span>
              </div>

              <div className="select-description__table__col">
                <span>Seats</span>
                <span>{data.seats}</span>
              </div>

              <div className="select-description__table__col">
                <span>AC</span>
                <span>{data.air}</span>
              </div>

              <div className="select-description__table__col">
                <span>Transmission</span>
                <span>{data.transmission}</span>
              </div>

              <div className="select-description__table__col">
                <span>Fuel</span>
                <span>{data.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a href="#booking-section" className="cta-btn">
              Reserve Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default CarContainer;
