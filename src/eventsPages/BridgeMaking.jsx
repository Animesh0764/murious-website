import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Bridge from '../images/mainevents/bridgemakingposter.webp';
import Bridge1 from "./images/BridgeMaking/DSC_0242.webp";
import Bridge2 from "./images/BridgeMaking/DSC_0244.webp";
import Bridge3 from "./images/BridgeMaking/DSC_0253.webp";
import Bridge4 from "./images/BridgeMaking/DSC_0257.webp";
import Bridge5 from "./images/BridgeMaking/DSC_0311.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Bridge}
            alt="Bridge Making"
            title="Bridge Making"
            date="Date: 10th March 2023"
            venue="Venue: BBC"
            time="Time: 2:00 PM - 5:00 PM"
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
            img1={Bridge1}
            alt1="Image"
            img2={Bridge2}
            alt2="Image"
            img3={Bridge3}
            alt3="Image"
            img4={Bridge4}
            alt4="Image"
            img5={Bridge5}
            alt5="Image"
          />
        </div>
      </div>
    );
  };
  