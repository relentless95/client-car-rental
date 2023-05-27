import React from "react";
import "./LogoRow.scss";

// import audi from "../../../public/images/logo_row/audi.png";
// import bmw from "../../../public/images/logo_row/bmw.png";
// import chevrolet from "../../../public/images/logo_row/chevrolet.png";
// import ford from "../../../public/images/logo_row/ford.png";
// import honda from "../../../public/images/logo_row/honda.png";
// import mercedes from "../../../public/images/logo_row/mercedes.png";
// import mustang from "../../../public/images/logo_row/mustang.png";
// import tesla from "../../../public/images/logo_row/tesla.png";
// import toyota from "../../../public/images/logo_row/toyota.png";
// import wv from "../../../public/images/logo_row/wv.png";

import { SiAudi } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiCitroen } from "react-icons/si";

function LogoRow() {
  return (
    <>
      <section className="logo-row-section">
        <div className="container">
          <div className="logo-rows">
            <div className="logo-container">
              <SiAudi className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiBmw className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiChevrolet className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiFord className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiHonda className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiMercedes className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiTesla className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiToyota className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiVolkswagen className="logo-icon" />
            </div>
            <div className="logo-container">
              <SiCitroen className="logo-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogoRow;
