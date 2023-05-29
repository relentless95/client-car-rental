import React, { useState } from "react";
import "./SelectCar.scss";
import { carData } from "./carData";
import CarContainer from "../CarContainer/CarContainer";

function SelectCar() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="select-section">
        <div className="container">
          <div className="select-container">
            <div className="select-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="select-container__car-content">
              {/* {Select car} */}
              <div className="select-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  Ford Mustang
                </button>

                <button
                  className={`${coloringButton("btn2")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  Honda Accord
                </button>

                <button
                  className={`${coloringButton("btn3")}`}
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Corolla
                </button>

                <button
                  className={`${coloringButton("btn4")}`}
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  VolksWagen Golf
                </button>

                <button
                  className={`${coloringButton("btn5")}`}
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  VolksWagen Tiguan
                </button>
              </div>

              {active === "FirstCar" && (
                <CarContainer data={carData} carID={0} />
              )}
              {active === "SecondCar" && (
                <CarContainer data={carData} carID={1} />
              )}
              {active === "ThirdCar" && (
                <CarContainer data={carData} carID={2} />
              )}
              {active === "FourthCar" && (
                <CarContainer data={carData} carID={3} />
              )}
              {active === "FifthCar" && (
                <CarContainer data={carData} carID={4} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectCar;
