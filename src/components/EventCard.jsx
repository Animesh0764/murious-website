import React from 'react';
import PropTypes from 'prop-types';
import '../../public/css/EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({ imageUrl, eventName, tagline, price, readMoreLink }) => {
    return (
        <div className="event-card-container" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="event-card-content">
                <div className="event-card-background"></div>
                <div className="event-card-details">
                    <div className="event-card-text">
                        <h1 className='event-name'>{eventName} • &#x20B9;{price}</h1>
                        <p>{tagline}</p>
                    </div>
                    <div className="read-more-container">
                        <Link to={readMoreLink}>
                            <button className="read-more-btn">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    readMoreLink: PropTypes.string.isRequired,
};

export default EventCard;
