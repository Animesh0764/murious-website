import React from "react";
// import "../../public/css/Events.css";
import { ongoing, upcoming } from "../data/events.json";
import Carousel from "../components/Carousel";

const Events = () => {

  return (
    <div className="events-container">
      {/* <div className="events-section"> */}
        <h2>Ongoing Events</h2>
        <div className="events-scroll-container">
          <Carousel data={ongoing} />
        </div>
      {/* </div> */}
      {/* <div className="events-section"> */}
        <h2>Upcoming Events</h2>
        <div className="events-scroll-container">
          <Carousel data={upcoming} />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Events;
