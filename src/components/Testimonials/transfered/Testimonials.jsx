import React from "react";
import "./Testimonials.scss";
import { MdFormatQuote } from "react-icons/md";
import john from "/images/testimonials/john.jpg";
import tyrion from "/images/testimonials/tyrion.jpg";


function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Clients Testimonials</h2>
              <p>
                Discover the positive impact we have made on our Clients reading
                through their testimonials. our clients have experienced our
                service and results, and they are eager to share their positive
                experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <MdFormatQuote />
                </span>
                <p>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis, saepe tempore eum, eligendi ut tempora similique nulla,
                  veniam pariatur nostrum aut vero. Quo recusandae dolorem illum
                  ex aspernatur. Ut, obcaecati? "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={john} alt="user_img" />
                    <span>
                      <h4>John Snow</h4>
                      <p>Munich</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <MdFormatQuote />
                </span>
                <p>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis, saepe tempore eum, eligendi ut tempora similique nulla,
                  veniam pariatur nostrum aut vero. Quo recusandae dolorem illum
                  ex aspernatur. Ut, obcaecati? "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={tyrion} alt="user_img" />
                    <span>
                      <h4>Tyrion Lannister</h4>
                      <p>Cologne</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
