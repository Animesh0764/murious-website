import React, { useState } from 'react';
import '../../public/css/Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(false);

    const openOverlay = () => {
        setIsOverlayActive(true);
    };

    const closeOverlay = () => {
        setIsOverlayActive(false);
    };

    return (
        <div>
            <header>
            <Link className="logo" to="/"><img src="../../images/muriouslogo.webp" alt="logo" /></Link>
                <nav>
                    <ul className="nav__links">
                        <li><Link className="glow" to="/"><span></span><span></span><span></span><span></span>Home</Link></li>
                        <li><Link className="glow" to="/events"><span></span><span></span><span></span><span></span>Events</Link></li>
                        <li><Link className="glow" to="/play"><span></span><span></span><span></span><span></span>Play</Link></li>
                        <li><Link className="glow" to="/registration"><span></span><span></span><span></span><span></span>Registration</Link></li>
                        <li><Link className="glow" to="/gallery"><span></span><span></span><span></span><span></span>Gallery</Link></li>
                        <li><Link className="glow" to="/team"><span></span><span></span><span></span><span></span>Team</Link></li>
                        <li><Link className="cta" to="/signin">SIGN IN</Link></li>
                    </ul>
                </nav>
                <p className="menu cta" onClick={openOverlay}>
                    Menu
                </p>
            </header>
            <hr className="glow-line" />
            {isOverlayActive && (
                <div id="mobile__menu" className={`overlay ${isOverlayActive ? 'overlay--active' : ''}`}>
                    <a className="close" onClick={closeOverlay}>&times;</a>
                    <div className="overlay__content">
                            <li><Link className="glow" to="/"><span></span><span></span><span></span><span></span>Home</Link></li>
                            <li><Link className="glow" to="/events"><span></span><span></span><span></span><span></span>Events</Link></li>
                            <li><Link className="glow" to="/play"><span></span><span></span><span></span><span></span>Play</Link></li>
                            <li><Link className="glow" to="/registration"><span></span><span></span><span></span><span></span>Registration</Link></li>
                            <li><Link className="glow" to="/gallery"><span></span><span></span><span></span><span></span>Gallery</Link></li>
                            <li><Link className="cta" to="/signin">SIGN IN</Link></li>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
