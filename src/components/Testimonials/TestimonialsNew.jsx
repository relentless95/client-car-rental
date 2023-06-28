import React, { useRef } from "react";
import TestimonialsSlider from "./TestimonialsSlider";
import { testimonialData } from "./Testimonials";

import "./TestimonialsNew.scss";

import Slider from "react-slick";

import "./slick.scss";
import "./slick-theme.scss";

import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";


let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// const testimonialData = [
//   {
//     name: "Harvey Specter",
//     position: "lawyer",
//     img: harvey,
//     stars: 4,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },

//   {
//     name: "Phoebe Buffey",
//     position: "Massage Therapist",
//     img: phoebe,
//     stars: 5,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },
//   {
//     name: "Dr. Gregory House",
//     position: "Doctor",
//     img: house,
//     stars: 3,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },
//   {
//     name: "Joey Tribbiani",
//     position: "Actor",
//     img: joey,
//     stars: 5,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },

//   {
//     name: "John Snow",
//     position: "King in the north",
//     img: john,
//     stars: 5,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },
//   {
//     name: "Tyrion Lannister",
//     position: "Hand of the Queen",
//     img: tyrion,
//     stars: 4,
//     disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe exercitationem autem delectus est, corrupti quibusdam error placeat cum quae eveniet possimus.",
//   },
// ];

function TestimonialsNew() {
  const arrowRef = useRef(null);
  let testimonialDisc = "";
  testimonialDisc = testimonialData.map((item, index) => {
    console.log("index in TesimonialsNew---->", index)
    return <TestimonialsSlider item={item} key={index} />
});

  // console.log("testimonialDisc------->", testimonialDisc);
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content__title">
          <h4>Reviews</h4>
          <h2>Clients Testimonials</h2>
          <p>
            Discover the positive impact we have made on our Clients reading
            through their testimonials. our clients have experienced our service
            and results, and they are eager to share their positive experiences
            with you.{" "}
          </p>
        </div>
        <div className="testimonials-content">
          <Slider ref={arrowRef} {...settings}>
            {testimonialDisc}
          </Slider>
          <div className="testimonials-buttons">
            <button onClick={() => arrowRef.current.slickPrev()}>
              <MdOutlineArrowCircleLeft />
            </button>
            <button onClick={() => arrowRef.current.slickNext()}>
              <MdOutlineArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsNew;
