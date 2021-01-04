import React from 'react';
import { Carousel } from 'react-bootstrap';


function WobblePhotos() {
    return (
      <Carousel indicators={false} className="wobble-chair">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={original}
            alt="Original Wobble Chair without alterations"
            height="500"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={clean}
            alt="Red wobble chair with a clean white background"
            height="500"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={red}
            alt="Red wobble chair with simulated movements"
            height="500"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={black}
            alt="Black wobble chair with simulated movements"
            height="500"
            width="500"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={blue}
            alt="Blue wobble chair with simulated movements"
            height="500"
            width="500"
            />
        </Carousel.Item>
      </Carousel>
    )
  }

  export default WobblePhotos;