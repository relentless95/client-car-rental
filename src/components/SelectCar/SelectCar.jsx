import React, { useState } from "react";
import "./SelectCar.scss";
import { carData } from "./carData";

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
        <div className="contain">
          <div className="select-container">
            <div className="select-container_title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a varitey of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="select-container__car-content">
              {/* {Select car} */}
              <div className="select-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectCar;
