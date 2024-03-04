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
            alt="Web-O-Fiesta"
            title="Web-O-Fiesta"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
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
  