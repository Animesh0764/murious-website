import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import About from "../components/About";
import MainEvents from "../components/MainEvents";
import Countdown from "../components/Countdown/Countdown";

const Home = () => {
    const [isPhoneView, setIsPhoneView] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneView(window.innerWidth <= 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Hero />
            <About />\
            {!isPhoneView && <Countdown />}
            {!isPhoneView && <MainEvents />}
            <Sponsors />
            <Footer />
        </div>
    );
};

export default Home;
