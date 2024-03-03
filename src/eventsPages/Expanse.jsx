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
            alt="Expanse"
            title="Expanse 3.0"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="The expanse,
            most awaited event of murious.
            a 18-hours long hackathon where
            juitians will come together in
            teams of 2-4 members to create
            solution on real life problems.
            let's sit, play, eat, chill and work
            to create
            the best we can.
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
  