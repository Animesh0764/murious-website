import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Bandish from "../images/mainevents/jammingleo.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Bandish}
            alt="Bandish"
            title="Bandish"
            date="Date: 8th March 2023"
            venue="Venue: OC"
            time="Time: 4:00 PM - 7:30 PM"
            about="The leo club is organizing a jamming
            session for the tech fest. it's a
            casual gathering where musicians
            come together to play without
            preparation. the aim is to create a
            fun environment for students and
            faculty to showcase their musical
            talents and connect through
            music. this event is significant as
            it's the first one in six years,
            providing a memorable experience
            for everyone involved."
          />
        </div>
      </div>
    );
  };
  