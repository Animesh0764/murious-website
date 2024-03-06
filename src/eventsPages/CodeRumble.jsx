import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../images/IMG_5187.JPG"


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Image1}
            alt="Code Rumble"
            title="Code Rumble"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="Prepare for an adrenalinefueled coding extravaganza
            inspired by wwe's royal rumble
            – welcome to Code Rumble by IEEE JUIT-SB! This
            dynamic event pits coding
            enthusiasts against each other
            in a series of ruthless rounds,
            eliminating contenders until
            only the coding champion
            remains.
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
  