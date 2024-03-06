import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Picture from "../images/mainevents/pictureperfectposter.webp";
import Picture1 from "./images/FrameByFrame/DSC_0076.jpg";
import Picture2 from "./images/FrameByFrame/DSC_0077.jpg";
import Picture3 from "./images/FrameByFrame/DSC_0557.jpg";
import Picture4 from "./images/FrameByFrame/DSC_0558.jpg";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Picture}
            alt="Picture Perfect"
            title="Picture Perfect"
            date="Date: 8th-9th March 2023"
            venue="Venue: JUIT"
            time="Time: All day"
            about="Participants are required to
            roam around the campus and
            click the best shot according
            to the provided theme which
            appeals to everyone.
            rules are simple, the best shot
            wins!!"
            img1={Picture3}
            alt1="Image"
            img2={Picture2}
            alt2="Image"
            img3={Picture1}
            alt3="Image"
            img4={Picture4}
            alt4="Image"
          />
        </div>
      </div>
    );
  };
  