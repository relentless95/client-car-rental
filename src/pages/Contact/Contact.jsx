import React from "react";
import HeroPages from "../../components/HeroPages/HeroPages";
import BannerPages from "../../components/bannerPages/BannerPages";
import ContactDetails from "../../components/Contact/ContactDetails";

function Contact() {
  return (
    <>
      <section className="contact-page">
      <HeroPages name="Contact" />
        <div className="container">
          {/* <ContactDetails/> */}

        </div>
       
        <BannerPages />
      </section>
    </>
  );
}

export default Contact;
