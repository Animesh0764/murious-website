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
            alt="Make It Print"
            title="Make It Print"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="Get creative with 'make it
            print'! design unique prints for
            t-shirts or hoodies based on
            given topics.
            submit your design for a
            chance to win, with the
            winning design printed on a
            hoodie. don't miss this
            opportunity to showcase your
            creativity and wear your own
            artwork!"
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
  