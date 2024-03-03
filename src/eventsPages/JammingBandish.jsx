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
            alt="Bandish"
            title="Bandish"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
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
  