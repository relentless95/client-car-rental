import React from "react";
import { MdLocalPhone } from "react-icons/md";
import "./BannerPages.scss"

function BannerPages() {
  return (
    <>
      <div className="book-banner">
        <div className="book-banner__overlay">
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <MdLocalPhone />
                <h3>0123 456 789</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerPages;
