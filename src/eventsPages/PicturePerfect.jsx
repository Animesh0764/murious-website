import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Image1 from "../images/IMG_5187.JPG"


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Image1}
            alt="Picture Perfect"
            title="Picture Perfect"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="Participants are required to
            roam around the campus and
            click the best shot according
            to the provided theme which
            appeals to everyone.
            rules are simple, the best shot
            wins!!"
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
  