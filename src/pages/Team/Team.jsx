import React from "react";
import HeroPages from "../../components/HeroPages/HeroPages";
import TeamCard from "../../components/Team/TeamCard";
import "./Team.scss";
import BannerPages from "../../components/bannerPages/BannerPages";

function Team() {
  return (
    <>
      <section className="team-page">
        <HeroPages name="Team" />
        <div className="container">
          <div className="team-container">
            <TeamCard />
          </div>
        </div>
      </section>
      <BannerPages />
    </>
  );
}

export default Team;
