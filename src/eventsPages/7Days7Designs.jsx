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
            alt="7 Days 7 Designs"
            title="7 Days 7 Designs"
            date="Date: 12th March 2021"
            about="An exhilarating design challenge
            where creativity thrives and
            innovation knows no bounds!
            over the course of seven days,
            participants will embark on a
            journey to create captivating
            logos for diverse companies. with
            daily challenges, expert
            evaluations, this event promises
            to push your design skills to new
            heights.
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
  