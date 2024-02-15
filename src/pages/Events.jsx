import React, { useState } from 'react';
import "../../public/css/Events.css";
import { ongoing, upcoming } from "../data/events.json";
import EventCard from "../components/EventCard";

const Events = () => {
  const [startIndexOngoing, setStartIndexOngoing] = useState(0);
  const [startIndexUpcoming, setStartIndexUpcoming] = useState(0);

  const nextImagesOngoing = () => {
    if (startIndexOngoing + 3 < ongoing.length) {
      setStartIndexOngoing(startIndexOngoing + 3);
    }
  };

  const prevImagesOngoing = () => {
    if (startIndexOngoing > 0) {
      setStartIndexOngoing(startIndexOngoing - 3);
    }
  };

  const renderEventCardsOngoing = (events) => {
    return events.slice(startIndexOngoing, startIndexOngoing + 3).map(event => (
      <EventCard
        key={event.id}
        imageUrl={event.imageUrl}
        eventName={event.eventName}
        tagline={event.tagline}
        price={event.price}
        readMoreLink={event.readMoreLink}
      />
    ));
  };

  const nextImagesUpcoming = () => {
    if (startIndexUpcoming + 3 < upcoming.length) {
      setStartIndexUpcoming(startIndexUpcoming + 3);
    }
  };

  const prevImagesUpcoming = () => {
    if (startIndexUpcoming > 0) {
      setStartIndexUpcoming(startIndexUpcoming - 3);
    }
  };

  const renderEventCardsUpcoming = (events) => {
    return events.slice(startIndexUpcoming, startIndexUpcoming + 3).map(event => (
      <EventCard
        key={event.id}
        imageUrl={event.imageUrl}
        eventName={event.eventName}
        tagline={event.tagline}
        price={event.price}
        readMoreLink={event.readMoreLink}
      />
    ));
  };

  return (
    <div className="events-container">
      <div className="events-section">
        <h2>Ongoing Events</h2>
        <div className="carousel">
          <button className="prev" onClick={prevImagesOngoing}>Previous</button>
          <button className="next" onClick={nextImagesOngoing}>Next</button>
          <div className="image-container">
            {renderEventCardsOngoing(ongoing)}
          </div>
        </div>
      </div>
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <div className="carousel">
          <button className="prev" onClick={prevImagesUpcoming}>Previous</button>
          <button className="next" onClick={nextImagesUpcoming}>Next</button>
          <div className="image-container">
            {renderEventCardsUpcoming(upcoming)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
