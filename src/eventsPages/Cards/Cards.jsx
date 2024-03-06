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
                <div className="event-venue e-venue">{parse.venue}</div>
                <div className="event-time e-time">{parse.time}</div>
                <div className="event-about">{parse.about}</div>
            </div>
            <div className='event-images'>
                <img className='event-image' src={parse.img1} alt={parse.alt1}/>
                <img className='event-image' src={parse.img2} alt={parse.alt2}/>
                <img className='event-image' src={parse.img3} alt={parse.alt3}/>
                <img className='event-image' src={parse.img4} alt={parse.alt4}/>
                <img className='event-image' src={parse.img5} alt={parse.alt5}/>
            </div>
            <div className='register-button'>
                <button className="btn"
                style={{width:`15rem`, height:`5rem`, borderRadius:`15px`}}>
                    <a href="https://forms.gle/wXU5qZru3eQgM9ox8" target='_blank' className="btn-link"
                    style={{fontSize:`1.5rem`}}>Register Now</a>
                </button>
            </div>
        </div>
    </div>
  )
}
