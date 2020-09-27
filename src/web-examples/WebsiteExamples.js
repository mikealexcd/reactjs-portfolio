import React from 'react';
import { Carousel } from 'react-bootstrap';
import anthrodesk from './anthrodesk.png'


export default function WebsiteExamples() {
    return (
        <Carousel>
  <Carousel.Item>
    <a href="https://www.anthrodesk.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={anthrodesk}
          alt="AnthroDesk Logo"
        />
    </a>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://www.anthrodesk.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={anthrodesk}
          alt="AnthroDesk Logo"
        />
    </a>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://www.anthrodesk.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={anthrodesk}
          alt="AnthroDesk Logo"
        />
    </a>
  </Carousel.Item>
</Carousel>
    )
}
