import React from 'react';
import { Carousel } from 'react-bootstrap';




function Jewelry() {
    return (
      <Carousel indicators={false} className="wobble-chair">
        <Carousel.Item>
            <img
            className="d-block"
            src=""
            alt="Original Wobble Chair without alterations"
            height="500"
            width="500"
            />
        </Carousel.Item>
      </Carousel>
    )
  }

  export default Jewelry;