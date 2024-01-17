import { useRef, useEffect } from 'react';
import '../../public/css/Gallery.css';

import { Link } from 'react-router-dom';

const Gallery = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    slideRef.current = document.querySelector('.slide');
  }, []);

  const handleNextClick = () => {
    const items = slideRef.current?.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    if (items && items.length > 0) {
      slideRef.current?.appendChild(items[0].cloneNode(true));
      slideRef.current?.removeChild(items[0]);
    }
  };

  const handlePrevClick = () => {
    const items = slideRef.current?.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    if (items && items.length > 0) {
      slideRef.current?.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
      slideRef.current?.removeChild(items[items.length - 1]);
    }
  };
  
  const items = [
    {
      image: 'public/images/hackathon.webp',
      name: 'Hackathon',
      description: 'hackathon 2.0',
      link: '/gallery/hackathon'
    },
    {
      image: 'public/images/webo.webp',
      name: 'Web-O-Fiesta',
      description: 'Designing beautiful websites',
      link: '/gallery/hackathon'
    },
    {
      image: 'public/images/pictureperfect.webp',
      name: 'Picture Perfect',
      description: 'Showcasing the story through pictures',
      link: '/gallery/hackathon'
    },
    {
      image: 'public/images/stock.webp',
      name: 'Stock Simulation',
      description: 'Virtual stock trading',
      link: '/gallery/hackathon'
    },
    {
      image: 'public/images/design.webp',
      name: 'Make It Print',
      description: 'Designing T-Shirts',
      link: '/gallery/hackathon'
    },
  ];

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {items.map((item, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <Link to={item.link} rel="noopener noreferrer"><button>See More</button></Link>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrevClick}>
        &#10094;
        </button>
        <button className="next" onClick={handleNextClick}>
        &#10095;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
