import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import Frame from "../images/mainevents/framebyframeposter.webp";
import Frame1 from "./images/FrameByFrame/DSC_0076.jpg";
import Frame2 from "./images/FrameByFrame/DSC_0077.jpg";
import Frame3 from "./images/FrameByFrame/DSC_0557.jpg";
import Frame4 from "./images/FrameByFrame/DSC_0558.jpg";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={Frame}
            alt="Frame By Frame"
            title="Frame By Frame"
            date="Date: 8th-10th March 2023"
            venue="Venue: JUIT"
            time="Time: All day"
            about="Participants will have to group
            themselves into
            sets of two or three members
            max and are supposed to make a
            video of minimum 30 seconds and
            maximum of 60 seconds to
            convey a
            “story”"
            img1={Frame3}
            alt1="Image"
            img2={Frame2}
            alt2="Image"
            img3={Frame1}
            alt3="Image"
            img4={Frame4}
            alt4="Image"
          />
        </div>
      </div>
    );
  };
  