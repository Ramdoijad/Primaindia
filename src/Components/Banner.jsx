import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className='main-slider style3'
      activeIndex={index}
      onSelect={handleSelect}
      interval={1000} // Set interval to 1000ms (1 second)
      prevIcon={<span className="custom-arrow left-arrow"><h3>{"<"}</h3></span>}
      nextIcon={<span className="custom-arrow right-arrow"><h3>{">"}</h3></span>}
     
    >
      <Carousel.Item>
        <div className="slide-background" style={{ backgroundImage: 'url(https://primelandindia.com/img/slider1.jpg)' }}>
          <Carousel.Caption className="slide-caption">
            <h3 style={{ color: "black" }}>CRAFTING LANDMARKS</h3>
            <p style={{ color: "black" }}>Transforming lifestyles.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-background" style={{ backgroundImage: 'url(https://primelandindia.com/img/slider2.jpg)' }}>
          <Carousel.Caption className="slide-caption">
            <h3 style={{ color: "black" }}>A GREAT INVESTMENT FOR THE FUTURE</h3>
            <p style={{ color: "black" }}>The Right Angle to Make Your Idea a Reality. Build just the right house to live smart.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
