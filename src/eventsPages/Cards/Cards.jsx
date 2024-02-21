import React from 'react';
import "./Cards.css";

export default function Cards(parse) {
  return (
    <div>
        <div className="event-page-card">
            <img className='event-poster' src={parse.img} alt={parse.alt}/>
            <div className="event-content">
                <div className="event-title">{parse.title}</div>
                <div className="event-date e-date">{parse.date}</div>
                <div className="event-about">{parse.about}</div>
            </div>
            <div className='event-images'>
                <img className='event-image' src={parse.img1} alt={parse.alt1}/>
                <img className='event-image' src={parse.img2} alt={parse.alt2}/>
                <img className='event-image' src={parse.img3} alt={parse.alt3}/>
                <img className='event-image' src={parse.img4} alt={parse.alt4}/>
                <img className='event-image' src={parse.img5} alt={parse.alt5}/>
            </div>
        </div>
    </div>
  )
}
