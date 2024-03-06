import React from "react";
import Cards from "./Cards/Cards";
import "./EventPages.css";
import InterfaceInvent from "../images/mainevents/interfaceinventposter.webp";

export default function Expanse() {
  return (
    <div>
      <div className="mov-night">
        <span className="header-bg-for-white" />
        <Cards
          img={InterfaceInvent}
          alt="InterFace Invent"
          title="InterFace Invent"
          date="Date: 09th March 2023"
          venue="Venue: CR-7"
          time="Time: 5:00PM - 6:30PM"
          about="Step into the realm of digital
            design with 'ui/ux showdown' –
            an electrifying event that
            challenges your
            creativity,innovation, and usercentric thinking! in this
            exhilarating competition,
            participants will harness the
            power of design tools like
            figma, photoshop, or any other
            platform to craft stunning
            ui/ux designs on given topics.
            "
        />
      </div>
    </div>
  );
}
