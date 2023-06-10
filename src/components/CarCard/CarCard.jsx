import React from "react";
import "./carCard.scss";
import { carDetails } from "./CarDetails";
import { MdStarOutline } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

// import carDetails from "./CarDetails";
// console.log(carDetails);
// console.log("here---->", carDetails[0]);

function CarCard() {
  let uniqueId = uuid();
  return (
    <>
      {carDetails.map((oneCar) => (
        <div className="models-div__box" key={oneCar.id}>
          <div className="models-div__box__img">
            <img src={oneCar.img} alt="car-img" />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>{oneCar.name}</p>
                  <span>
                    {Array(oneCar.stars)
                      .fill()
                      .map((_, index) => (
                        <>
                          <span className="slider-header__star" key={index}>
                            <MdStarOutline />
                          </span>
                        </>
                      ))}
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__price">
                  <h4>${oneCar.price}</h4>
                  <p>per day</p>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <MdDirectionsCar className="icon" /> &nbsp;{oneCar.name}
                </span>
                <span className="right">
                  4/5 &nbsp; <MdDirectionsCar className="icon" />
                </span>
                <span>
                  <MdDirectionsCar className="icon" /> &nbsp;{" "}
                  {oneCar.transmission}
                </span>
                <span className="right">
                  {oneCar.fuel}
                  <MdDirectionsCar className="icon" />
                </span>
              </div>

              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarCard;
