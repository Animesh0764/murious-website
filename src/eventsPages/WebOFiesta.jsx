import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Web from "../images/mainevents/web-o-fistaposter.webp";
import Web1 from "./images/Web-O-Fiesta/IMG_3021.webp";
import Web2 from "./images/Web-O-Fiesta/IMG_3035.webp";
import Web3 from "./images/Web-O-Fiesta/IMG_3039.webp";
import Web4 from "./images/Web-O-Fiesta/IMG_3048.webp";
import Web5 from "./images/Web-O-Fiesta/IMG_3050.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Web}
            alt="Web-O-Fiesta"
            title="Web-O-Fiesta"
            date="Date: 9th March 2023"
            venue="Venue: CR-4"
            time="Time: 2:00PM - 4:00PM"
            about="Coders, brace yourselves for the
            ultimate test of skill and speed!
            introducing 'Web-O-Fiesta,
            ' where
            your coding mettle will be put to
            the ultimate test.
            in this electrifying event, you'll
            face off against the clock and
            your fellow participants as you
            race to bring a ui design to life
            through the power of code."
            img1={Web1}
            alt1="Image"
            img2={Web2}
            alt2="Image"
            img3={Web3}
            alt3="Image"
            img4={Web4}
            alt4="Image"
            img5={Web5}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  