// import React from "react";
import Hero from "../../components/Hero/Hero";
import BookCar from "../../components/BookCar/BookCar";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
// import "./Home.scss"

function HomePage() {
  return (
    <>
      <Hero />
      {/* insert a new component here with row of logos */}
      <BookCar />
      <PlanTrip />
    </>
  );
}

export default HomePage;
