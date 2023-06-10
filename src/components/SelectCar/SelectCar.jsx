import { useState } from "react";
import "./SelectCar.scss";
import { carData } from "./carData";
import CarContainer from "../CarContainer/CarContainer";

function SelectCar() {
  const [active, setActive] = useState("Ford Mustang GT");
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
                {carData.map((car, index) => (
                  <button
                    key={car.name}
                    className={`${coloringButton(`btn${index}`)}`}
                    onClick={() => {
                      setActive(car.name);
                      btnID(`btn-${index + 1}`);
                    }}
                  >
                    {car.name}
                    {console.log("looking for this----->", car)}
                  </button>
                ))}
              </div>

              <CarContainer
                data={carData.find((car) => car.name === active)}
                carID={0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectCar;
