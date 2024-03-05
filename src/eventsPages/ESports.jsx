import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../../public/images/IMG_5187.JPG"


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Image1}
            alt="E-Sports"
            title="E-Sports"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="Gaming isn’t just about the games we play,
            it’s the people we play with.
            So get your game on and start connecting
            with people from all over to build
            your tribe and thrive!
            "
            img1={Image1}
            alt1="Image"
            img2={Image1}
            alt2="Image"
            img3={Image1}
            alt3="Image"
            img4={Image1}
            alt4="Image"
            img5={Image1}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  