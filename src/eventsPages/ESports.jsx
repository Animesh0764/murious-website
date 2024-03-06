import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Valorant from "../images/mainevents/valorantposter.webp";
import Fifa from "../images/mainevents/fifaposter.webp";
import BGMI from "../images/mainevents/bgmiposter.webp";
import Tekken from "../images/mainevents/tekkenposter.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Valorant}
            alt="E-Sports"
            title="E-Sports"
            date="Date: 8th - 9th March 2023"
            venue="Venue: CR-1/2 CL-4 LT-1/2"
            time="Time: 5:30PM - 12:00AM"
            about="Gaming isn’t just about the games we play,
            it’s the people we play with.
            So get your game on and start connecting
            with people from all over to build
            your tribe and thrive!
            "
            img1={Fifa}
            alt1="Image"
            img2={BGMI}
            alt2="Image"
            img3={Tekken}
            alt3="Image"
          />
        </div>
      </div>
    );
  };
  