import React from 'react';
import EventCard from '../components/EventCard';
import '../../public/css/Events.css';
import { ongoing, upcoming } from '../data/events.json';

const Events = () => {
    return (
        <div className="events-container">
            <div className="events-section">
                <h2>Ongoing Events</h2>
                <div className="events-scroll-container">
                    {ongoing.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
            <div className="events-section">
                <h2>Upcoming Events</h2>
                <div className="events-scroll-container">
                    {upcoming.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
