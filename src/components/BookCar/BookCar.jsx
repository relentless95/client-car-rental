import React, { useEffect, useState } from "react";

import CarFordMu from "/images/car_images/ford-mustang.png";
import CarHondaAcc from "/images/car_images/honda-accord.png";
import CarToyotaCor from "images/car_images/toyota-corolla.png";
import CarWvGolf from "images/car_images/volkswagen-golf2.png";
import CarWvTi from "images/car_images/volkswagen-tiguan.png";

import { IoCar, IoCarSportSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

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
  const [zipcode, setZipcode] = useState("");

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
    setZipcode(e.target.value);
  };

  //open modal when all inputs are filled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector("error-message");
    if (pickUp === "" || dropOff === "" || pickTime === "" || carType === "") {
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
              <p className="booki">
                Check your email to confirm an order.
                <MdOutlineClose />
              </p>
              <form action="" className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IoCarSportSharp /> &nbsp; Select your Car Type <b>*</b>
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <div>BookCar</div>
    </>
  );
}

export default BookCar;
