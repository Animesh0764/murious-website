import React from 'react';
import EventCard from '../components/EventCard';
import '../../public/css/Events.css';
import { ongoing, upcoming } from '../data/events.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Events = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            },
        };

    const ongoingEvent = ongoing.map(event =>(
        <EventCard {...event} />
    ))

    const upcomingEvent = upcoming.map(event =>(
        <EventCard {...event} />
    ))

    return (
        <div className="events-container">
            <div className="events-section">
                <h2>Ongoing Events</h2>
                <div className="events-scroll-container">
                    <Carousel responsive={responsive}>
                        {ongoingEvent}
                    </Carousel>
                </div>
            </div>
            <div className="events-section">
                <h2>Upcoming Events</h2>
                <div className="events-scroll-container">
                <Carousel responsive={responsive}>
                        {upcomingEvent}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Events;
