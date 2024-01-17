import { useState, useEffect } from 'react';
import '../../public/css/Sub-page.css';

function SliderHackathon() {
    const [itemActive, setItemActive] = useState(0);

    const itemsData = [
        { src: '../../public/images/image3.webp', content: 'Hackathon' },
        { src: '../../public/images/image1.webp', content: 'Hackathon' },
        { src: '../../public/images/image2.webp', content: 'Hackathon' },
        { src: '../../public/images/image11.webp', content: 'Hackathon' },
        { src: '../../public/images/image4.webp', content: 'Hackathon' },
    ];

    const countItem = itemsData.length;

    const nextSlide = () => {
        setItemActive((itemActive + 1) % countItem);
    };

    const prevSlide = () => {
        setItemActive((itemActive - 1 + countItem) % countItem);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [itemActive]);

    return (
        <div className="slider">
            <div className="list">
                {itemsData.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                        <img src={item.src} alt={`Image ${index + 1}`} />
                        <div className="content">
                            <p></p>
                            <h2>{item.content}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {itemsData.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                        <img src={item.src} alt={`Image ${index + 1}`} />
                        <div className="content"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SliderHackathon;
