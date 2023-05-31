// import React from "react";
import Hero from "../../components/Hero/Hero";
import BookCar from "../../components/BookCar/BookCar";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import LogoRow from "../../components/LogoRow/LogoRow";
import About from "../../components/About/About";
import SelectCar from "../../components/SelectCar/SelectCar";
import Banner from "../../components/Banner/Banner";
// import Testimonials from "../../components/Testimonials/Testimonials";
// import TestimonialsNew from "../../components/Testimonials/TestimonialsNew";
import TestimonialsNew from "../../components/Testimonials/TestimonialsNew";
// import "./Home.scss"

function HomePage() {
  return (
    <>
      <Hero />
      <BookCar />
      {/* insert a new component here with row of logos */}
      <LogoRow />
      <PlanTrip />
      <About />
      <SelectCar />
      <Banner />
      {/* <Testimonials /> */}
      <TestimonialsNew/>
    </>
  );
}

export default HomePage;
