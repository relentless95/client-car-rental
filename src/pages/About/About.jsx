import React from "react";
import HeroPages from "../../components/HeroPages/HeroPages";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import { MdLocalPhone } from "react-icons/md";
import CustomerService from "../../../public/images/about_page/service_customer.jpg";
import "./About.scss";
import BannerPages from "../../components/bannerPages/BannerPages";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={CustomerService}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis labore eius sed. Aliquid quibusdam voluptatem
                voluptatibus porro perspiciatis eveniet veritatis,
                necessitatibus reprehenderit quam, repellat tempore, ratione
                nihil esse non praesentium. Magnam temporibus quo assumenda eum
                dolorem quisquam sint dicta placeat doloremque. Ullam expedita
                facilis, ipsam porro molestias enim! Accusamus culpa distinctio
                veniam id ratione illo quia perspiciatis molestiae nemo
                similique.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  {/* <img src={"#"} alt="car-icon" /> */}
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>

                <div className="about-main__text__icons__box">
                  {/* <img src={"#"} alt="car-icon" /> */}
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>

                <div className="about-main__text__icons__box">
                  {/* <img src={"#"} alt="car-icon" className="last-fk" /> */}
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain2}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3></h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis labore eius sed. Aliquid quibusdam voluptatem
                voluptatibus porro perspiciatis eveniet veritatis,
                necessitatibus reprehenderit quam, repellat tempore, ratione.
              </p>
             
            </div>
          </div> */}
          <PlanTrip />
        </div>
      </section>
      <BannerPages/>
    </>
  );
}

export default About;
