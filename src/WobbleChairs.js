import React from 'react';
import PhotoExamples from './wobble/PhotoExamples';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container} from 'react-bootstrap';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;


export default function WobbleChairs() {

    function scrollToTop() {
        return scroll.scrollToTop();
      }

    return (
        <div className="d-flex flex-column align-items-center photos">
      <FontAwesomeIcon icon={faChevronUp} className="mb-5" onClick={scrollToTop} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Wobble Chairs</h1>
            <p>In this photoshoot, we used a white background to make the photo editing process easier. To prevent the product photos from showing slight movements in the different colours, all of them were edited from the original red chair.  Since the chairs are supposed to be moved around (hence wobble chairs), I made a couple of transparent copies simulating movement.</p>
          </Col>
          <Col>
            <Element>
            <PhotoExamples />
            </Element>
          </Col>
        </Row>
      </Container>
      <ScrollTo to="photos" smooth={true}>
              <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
      </ScrollTo>
    </div>
    )
}