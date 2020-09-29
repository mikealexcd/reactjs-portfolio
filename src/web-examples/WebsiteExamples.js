import React from 'react';
import { Carousel } from 'react-bootstrap';
import anthrodesk from './anthrodesk-logo.svg'
import heritagecbd from './HeritageLogo.svg'
import petmedcbd from './petmedcbd-logo.svg'


export default function WebsiteExamples() {
    return (
        <Carousel>
  <Carousel.Item>
    <a href="https://www.anthrodesk.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={anthrodesk}
          alt="AnthroDesk Logo"
          height="500"
          width="500"
        />
    </a>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://www.heritagecbd.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={heritagecbd}
          alt="Heritage CBD Logo"
          height="500"
          width="500"
        />
    </a>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://www.petmedcbd.ca/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={petmedcbd}
          alt="PetMEdCBD Logo"
          height="500"
          width="500"
        />
    </a>
  </Carousel.Item>
</Carousel>
    )
}
