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
            alt="Storage Wars"
            title="Storage Wars"
            date="Date: 12th March 2021"
            venue="Venue: XXX"
            time="Time: XXX"
            about="In 'storage wars,
            ' students
            engage in bidding on storage
            containers using fake currency,
            inspecting only the exterior.
            teams of 2-4 collaborate,
            emphasizing strategic thinking
            and resource management. The
            event fosters negotiation,
            financial literacy, and
            teamwork skills in a competitive
            setting."
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
  