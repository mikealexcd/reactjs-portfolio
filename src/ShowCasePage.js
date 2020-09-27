import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container} from 'react-bootstrap';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;


export default function ShowCasePage(props) {

    function scrollToTop() {
        return scroll.scrollToTop();
      }

    return (
        <>
        <div className="full-container d-flex flex-column align-items-center photos" id={props.title}>
      <FontAwesomeIcon icon={faChevronUp} className="mb-5 arrow-up" onClick={scrollToTop} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
          </Col>
          <Col>
            <Element>
                {props.children}
            </Element>
          </Col>
        </Row>
      </Container>
      <ScrollTo to="photos" smooth={true}>
              <FontAwesomeIcon icon={faChevronDown} className="mt-5 arrow-down" />
      </ScrollTo>
    </div>
    </>
    )
}