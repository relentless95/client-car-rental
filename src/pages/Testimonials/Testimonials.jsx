import React from "react";
import BannerPages from "../../components/bannerPages/BannerPages";
import HeroPages from "../../components/HeroPages/HeroPages";
import TestimonialsNew from "../../components/Testimonials/TestimonialsNew";

function Testimonials() {
  return (
    <>
      <HeroPages name="Testimonials" />
      <TestimonialsNew />
      <BannerPages />
    </>
  );
}

export default Testimonials;
