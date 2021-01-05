import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container} from 'react-bootstrap';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;


export default function ShowCasePage(props) {

    const image = props.image;

    return (
        <>
        <div className="full-container d-flex flex-column align-items-center" id={props.title}>
        <ScrollTo to={props.previous} smooth={true}>
              <FontAwesomeIcon icon={faChevronUp} className="mb-3 arrow-up" />
      </ScrollTo>
      <Container>
        <Row className="align-items-center">
          {image != null 
                ?<Col xs={12} md={6}><img src={props.image} alt={props.name} class="img-circle rounded-circle"/></Col>
                :<Col xs={12} md={6}><h1>{props.name}</h1><p>{props.description}</p></Col>
          }
          <Col>
            <Element>
                {props.children}
            </Element>
          </Col>
        </Row>
      </Container>
      <ScrollTo to={props.next} smooth={true}>
              <FontAwesomeIcon icon={faChevronDown} className="mt-5 arrow-down" />
      </ScrollTo>
    </div>
    </>
    )
}