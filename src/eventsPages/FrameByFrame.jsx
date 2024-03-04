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
            alt="Frame By Frame"
            title="Frame By Frame"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="Participants will have to group
            themselves into
            sets of two or three members
            max and are supposed to make a
            video of minimum 30 seconds and
            maximum of 60 seconds to
            convey a
            “story”"
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
  