import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Rumble from "../images/mainevents/coderumbleposter.webp";
import Rumble1 from "./images/CodeRumble/IMG_5683.webp";
import Rumble2 from "./images/CodeRumble/IMG_5703.webp";
import Rumble3 from "./images/CodeRumble/IMG_5704.webp";
import Rumble4 from "./images/CodeRumble/IMG_5707.webp";
import Rumble5 from "./images/CodeRumble/IMG_5712.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Rumble}
            alt="Code Rumble"
            title="Code Rumble"
            date="Date: 10th March 2023"
            venue="Venue: CL-4"
            time="Time: 10:00AM - 12:00PM"
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
            img1={Rumble1}
            alt1="Image"
            img2={Rumble2}
            alt2="Image"
            img3={Rumble3}
            alt3="Image"
            img4={Rumble4}
            alt4="Image"
            img5={Rumble5}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  