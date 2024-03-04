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
            alt="Bridge Making"
            title="Bridge Making"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="The event focuses on bringing out
            the creative side of the
            participants. the main aim of the
            event is to build a bridge model
            using ice cream sticks on top of a
            cardboard base that can sustain a
            certain amount of weight, within
            the limited time and resources
            provided to the participants. the
            competition will help in
            showcasing your skills and how
            well you can come out with the
            best model keeping in mind time and
            resource management"
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
  