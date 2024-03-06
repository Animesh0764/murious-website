import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import StorageWars from "../images/mainevents/storagewarsposter.webp";


export default function Expanse() {
    return (
      <div>
        <div className="mov-night">
        <span className="header-bg-for-white"/>
          <Cards
            img={StorageWars}
            alt="Storage Wars"
            title="Storage Wars"
            date="Date: 9th March 2023"
            venue="Venue: BBC"
            time="Time: 2:00PM - 6:00PM"
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
          />
        </div>
      </div>
    );
  };
  