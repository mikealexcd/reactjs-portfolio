import React from 'react';
import { Carousel } from 'react-bootstrap';
import original from './wobble-red.jpg';
import clean from './wobble-red-clean.jpg';
import red from './wobble-red-moving.jpg';
import black from './wobble-black-moving.jpg';
import blue from './wobble-blue-moving.jpg';

function WobblePhotos() {
    return (
      <Carousel indicators={false} className="wobble-chair">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={original}
            alt="Original Wobble Chair without alterations"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={clean}
            alt="Red wobble chair with a clean white background"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={red}
            alt="Red wobble chair with simulated movements"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={black}
            alt="Black wobble chair with simulated movements"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={blue}
            alt="Blue wobble chair with simulated movements"
            width="500"
            />
        </Carousel.Item>
      </Carousel>
    )
  }

  export default WobblePhotos;