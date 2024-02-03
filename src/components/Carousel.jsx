import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "../components/EventCard";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {data.map((card, index) => (
        <div key={index}>
          <EventCard {...card} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
