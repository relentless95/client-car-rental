import React, { useState } from "react";
import "./TeamCard.scss";
import { useEffect } from "react";
import axios from "axios";
// import { faker } from "@faker-js/faker";

const api_url = "https://randomuser.me/api/?results=9";

function TeamCard() {
  const [team, setTeam] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const jobs = [
    "Sales Representative",
    "Business Owner",
    "Vehicle Inspector",
    "Customer service",
    "Reservation Agent",
    "Operations Manager",
    "Rental agent",
    "Photographer",
    "Mechanic",
    "Menager",
  ];

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        console.log("response for the team------>", response);

        setTeam(response.data.results);
        setIsFetching(false);
      })

      .catch((err) => {
        console.log("error---->", err);
      });
  }, []);

  console.log("is fetching is: ", isFetching);
  console.log(team);

  return (
    <>
      {!isFetching && (
        <>
          {team.map((info, index) => {
            return (
              <>
                <div className="team-container__box" key={info.id.value}>
                  <div className="team-container__box__img-div">
                    <img src={info.picture.large} alt="picture" />
                  </div>
                  <div className="team-container__box__descr">
                    <h3>{`${info.name.first} ${info.name.last}`}</h3>
                    <p>{jobs[index]}</p>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default TeamCard;
