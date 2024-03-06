import React, { useState } from 'react';
import "../../public/css/Events.css";
// import { ongoing, upcoming } from "../data/events.json";
import EventCard from "../components/EventCard";
import Expanse from "../images/mainevents/expanceposter.webp";
import CodeChaos from "../images/mainevents/codechaosposter.webp";
import FrameByFrame from "../images/mainevents/framebyframeposter.webp";
import PicturePerfect from "../images/mainevents/pictureperfectposter.webp";
import BGMI from "../images/mainevents/bgmiposter.webp";
import BridgeMaking from "../images/mainevents/bridgemakingposter.webp";
import WebOFiesta from "../images/mainevents/web-o-fistaposter.webp";
import CodeCleanse from "../images/mainevents/codecleanseposter.webp";
import MakeItPrint from "../images/mainevents/makeitprintposter.webp";
import CodeRumble from "../images/mainevents/coderumbleposter.webp";
import CodeRelay from "../images/mainevents/coderelayposter.png";
import Valorant from "../images/mainevents/valorantposter.webp";
import InterfaceInvent from "../images/mainevents/interfaceinventposter.webp";


const upcoming = [
  {
      "id": 1,
      "imageUrl": Expanse,
      "eventName": "Expanse 3.0",
      "tagline": "Transform ideas into tech marvels at Murious 18.0",
      "price": 250,
      "readMoreLink": "/expanse"
  },
  {
      "id": 2,
      "imageUrl": CodeChaos,
      "eventName": "Code Chaos",
      "tagline": "Have a chance to win the chaos at Murious 18.0",
      "price": 200,
      "readMoreLink": "/codechaos"
  },
  {
      "id": 3,
      "imageUrl": InterfaceInvent,
      "eventName": "InterFace Invent",
      "tagline": "Step into the realm of digital design at Murious 18.0",
      "price": 300,
      "readMoreLink": "/interfaceinvent"
  },
  {
      "id": 4,
      "imageUrl": PicturePerfect,
      "eventName": "Picture Perfect",
      "tagline": "Flex your photography skills at Murious 18.0",
      "price": 150,
      "readMoreLink": "/pictureperfect"   
  },
  {
      "id": 5,
      "imageUrl": FrameByFrame,
      "eventName": "Frame By Frame",
      "tagline": "Tell a story your wat at Murious 18.0",
      "price": 150,
      "readMoreLink": "/framebyframe"   
  },
  {
      "id": 6,
      "imageUrl": "",
      "eventName": "3 Days 3 Designs",
      "tagline": "Embark on a journey to create captivating logos at Murious 18.0",
      "price": 150,
      "readMoreLink": "/7days7designs"   
  },
  {
      "id": 7,
      "imageUrl": BridgeMaking,
      "eventName": "Bridge Making",
      "tagline": "Build the best bridge model at Murious 18.0",
      "price": 220,
      "readMoreLink": "/bridgemaking"   
  },
  {
      "id": 8,
      "imageUrl": WebOFiesta,
      "eventName": "Web-O-Fiesta",
      "tagline": "Prove your coding mettle at Murious 18.0",
      "price": 220,
      "readMoreLink": "/webofiesta"   
  },
  {
      "id": 9,
      "imageUrl": CodeCleanse,
      "eventName": "Code Cleanse",
      "tagline": "Uncover hidden errors lurking in the code at Murious 18.0",
      "price": 220,
      "readMoreLink": "/codecleanse"   
  },
  {
      "id": 10,
      "imageUrl": MakeItPrint,
      "eventName": "Make It Print",
      "tagline": "Showcase your creativity and wear your designs at Murious 18.0",
      "price": 220,
      "readMoreLink": "/makeitprint"   
  },
  {
      "id": 11,
      "imageUrl": CodeRumble,
      "eventName": "Code Rumble",
      "tagline": "Eliminate opponents royal rumble style at Murious 18.0",
      "price": 220,
      "readMoreLink": "/coderumble"   
  },
  {
      "id": 12,
      "imageUrl": CodeRumble,
      "eventName": "Code Relay",
      "tagline": "Pass the coding baton in this programming relay at Murious 18.0",
      "price": 220,
      "readMoreLink": "/coderelay"   
  },
  {
      "id": 13,
      "imageUrl": "../images/IMG_5187.JPG",
      "eventName": "Storage Wars",
      "tagline": "Show your negotiation, financial literacy and strategic skills at Murious 18.0",
      "price": 220,
      "readMoreLink": "/storagewars"   
  },
  {
      "id": 14,
      "imageUrl": "../images/IMG_5187.JPG",
      "eventName": "Bandish",
      "tagline": "Showcase your musical talent and connect through music at Murious 18.0",
      "price": 220,
      "readMoreLink": "/bandish"   
  },
  {
      "id": 15,
      "imageUrl": Valorant,
      "eventName": "E-Sports",
      "tagline": "Set your game mode on and build your tribe at Murious 18.0",
      "price": 220,
      "readMoreLink": "/esports"   
  }
]

const ongoing = [
  {
      "id": 1,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  },
  {
      "id": 2,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  },
  {
      "id": 3,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  },
  {
      "id": 4,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  },
  {
      "id": 5,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  },
  {
      "id": 6,
      "imageUrl": "../images/mainevents/expanse.webp",
      "eventName": "Inventive Code-a-thon",
      "tagline": "Invent, Code, Win: Murious 18.0 awaits your innovation",
      "price": 220,
      "readMoreLink": "/"
  }
]

const Events = () => {
  const [startIndexOngoing, setStartIndexOngoing] = useState(0);
  const [startIndexUpcoming, setStartIndexUpcoming] = useState(0);

  const nextImagesOngoing = () => {
    if (startIndexOngoing + 1 < ongoing.length) {
      setStartIndexOngoing(startIndexOngoing + 1);
    }
  };

  const prevImagesOngoing = () => {
    if (startIndexOngoing > 0) {
      setStartIndexOngoing(startIndexOngoing - 1);
    }
  };

  const renderEventCardsOngoing = (events) => {
    return events.slice(startIndexOngoing, startIndexOngoing + 1).map(event => (
      <EventCard
        key={event.id}
        imageUrl={event.imageUrl}
        eventName={event.eventName}
        tagline={event.tagline}
        price={event.price}
        readMoreLink={event.readMoreLink}
      />
    ));
  };

  const nextImagesUpcoming = () => {
    if (startIndexUpcoming + 1 < upcoming.length) {
      setStartIndexUpcoming(startIndexUpcoming + 1);
    }
  };

  const prevImagesUpcoming = () => {
    if (startIndexUpcoming > 0) {
      setStartIndexUpcoming(startIndexUpcoming - 1);
    }
  };

  const renderEventCardsUpcoming = (events) => {
    return events.slice(startIndexUpcoming, startIndexUpcoming + 1).map(event => (
      <EventCard
        key={event.id}
        imageUrl={event.imageUrl}
        eventName={event.eventName}
        tagline={event.tagline}
        price={event.price}
        readMoreLink={event.readMoreLink}
      />
    ));
  };

  return (
    <div className="events-container">
      {/* <div className="events-section">
        <h2>Ongoing Events</h2>
        <div className="carousel">
          <button className="prev" onClick={prevImagesOngoing}>Previous</button>
          <button className="next" onClick={nextImagesOngoing}>Next</button>
          <div className="image-container">
            {renderEventCardsOngoing(ongoing)}
          </div>
        </div>
      </div> */}
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <div className="carousel">
          <button className="prev" onClick={prevImagesUpcoming}>Previous</button>
          <button className="next" onClick={nextImagesUpcoming}>Next</button>
          <div className="image-container">
            {renderEventCardsUpcoming(upcoming)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
