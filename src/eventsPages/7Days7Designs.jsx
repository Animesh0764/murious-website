import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
// import Image1 from "../images/mainevents/3days3designspo.webp"


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Image1}
            alt="3 Days 3 Designs"
            title="3 Days 3 Designs"
            date="Date: 8th March 2023"
            venue="Venue: Online Event"
            time="Time: 9:00 AM(8th March) - 5:00 PM(10th March)"
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
          />
        </div>
      </div>
    );
  };
  