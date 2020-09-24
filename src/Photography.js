import React from 'react';
import PhotoExamples from './PhotoExamples';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;
let Element = Scroll.Element;

export default function Photography() {
    return (
      <div>
      <div className="full-container">
        <div className="top-wrapper">
          <h1 className="top-title">Photography</h1>
          <ScrollTo to="photos" smooth={true}>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </ScrollTo>
        </div>
    </div>
    <div className="full-container">
        <Element className="photos">
          <PhotoExamples />
        </Element>
    </div>
    </div>
      );
    }