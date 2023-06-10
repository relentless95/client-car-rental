import React from "react";
import BannerPages from "../../components/bannerPages/BannerPages";
import HeroPages from "../../components/HeroPages/HeroPages";
import CarCard from "../../components/CarCard/CarCard";
import "./Models.scss";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Models" />
        <div className="container">
          <div className="models-div">
            <CarCard />
          </div>
        </div>
      </section>
      <BannerPages />
    </>
  );
}

export default Models;
