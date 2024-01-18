import React from 'react';
import '../../public/css/TeamCard.css';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TeamCard = ({ name, designation, imageUrl, linkedinUrl, instagramUrl }) => {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-background"></div>
                <div className="person-image">
                    <img className="card-image" src={imageUrl} alt="Person" />
                </div>
                <div className="card-details">
                    <div className="card-text">
                        <h2>{name}</h2>
                        {designation}
                    </div>
                    <div className="card-icons">
                        <Link to={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='linkedin' />
                        </Link>
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='instagram' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
