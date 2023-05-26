import "./BookCar.scss";
import React, { useEffect, useState } from "react";

import CarFordMu from "../../../public/images/car_images/ford-mustang.png";
import CarHondaAcc from "../../../public/images/car_images/toyota-corolla.png"; //"/images/car_images/honda-accord.png";
import CarToyotaCor from "../../../public/images/car_images/toyota-corolla.png";
import CarWvGolf from "../../../public/images/car_images/volkswagen-golf2.png";
import CarWvTi from "../../../public/images/car_images/volkswagen-tiguan.png";

import { IoCarSportSharp } from "react-icons/io5";
import {
  MdCalendarMonth,
  MdOutlineClose,
  MdLocationPin,
  MdInfoOutline,
} from "react-icons/md";

function BookCar() {
  const [modal, setModal] = useState(false); //class- active-modal

  //booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  //modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  //   taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  //open modal when all inputs are filled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      carType === "" ||
      dropTime === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  //disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  //taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  //based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Ford Mustang":
      imgUrl = CarFordMu;
      break;
    case "Honda Accord":
      imgUrl = CarHondaAcc;
      break;
    case "Toyota Corolla":
      imgUrl = CarToyotaCor;
      break;
    case "Volkswagen Golf":
      imgUrl = CarWvGolf;
      break;
    case "Volkswagen Tiguan":
      imgUrl = CarWvTi;
      break;
    default:
      imgUrl = "";
  }

  //hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>
              <p className="error-message">
                All fields required! <MdOutlineClose />
              </p>
              <p className="booking-done">
                Check your email to confirm an order.
                <MdOutlineClose onClick={hideMessage} />
              </p>
              {/* add the post request here */}
              <form action="" className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IoCarSportSharp className="icon-color" /> &nbsp; Select
                    your Car Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Ford Mustang">Ford Mustang</option>
                    <option value="Honda Accord">Honda Accord</option>
                    <option value="Toyota Corolla">Toyota Corolla</option>
                    <option value="Volkswagen Golf">Volkswagen Golf</option>
                    <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <MdLocationPin className="icon-color" /> &nbsp; Pick-up
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select drop off location</option>
                    <option>Berlin</option>
                    <option>Hamburg</option>
                    <option>Munich</option>
                    <option>Frankfurt</option>
                    <option>Cologne</option>
                    <option>Dusseldorf</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <MdLocationPin className="icon-color" /> &nbsp; Drop-of
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Berlin</option>
                    <option>Hamburg</option>
                    <option>Munich</option>
                    <option>Frankfurt</option>
                    <option>Cologne</option>
                    <option>Dusseldorf</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <MdCalendarMonth className="icon-color" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    onChange={handlePickTime}
                    value={pickTime}
                    type="date"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <MdCalendarMonth className="icon-color" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <MdOutlineClose className="icon-color" onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <MdInfoOutline className="icon-color" /> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to present on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <MdLocationPin className="icon-color" />
                <div>
                  <h6> Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <MdLocationPin className="icon-color" />
                <div>
                  <h6>Drop-off Date & Time</h6>
                  <p>
                    {dropTime} / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <MdCalendarMonth className="icon-color" />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <MdCalendarMonth className="icon-color" />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>

          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car-</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>

        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>

          {/* add the post request here */}
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>First Name</label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                />
                <p className="error-m">This field is required.</p>
              </span>
              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Phone Number
                  <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <p className="error-m">This field is required.</p>
              </span>

              <span>
                <label>
                  Age<b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                />
                <p className="error-modal">This field is required</p>
              </span>
            </div>
            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                />
                <p className="error-modal">This field is required</p>
              </span>

              <span>
                <label>
                  Address<b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder={"Enter your street address"}
                />
                <p className="error-modal">This field is required</p>
              </span>
            </div>
            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                />
                <p className="error-modal">This field is required</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipCode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                />
                <p className="error-modal">This field is required</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" />
              <p>Please send me the latest news and updates.</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
