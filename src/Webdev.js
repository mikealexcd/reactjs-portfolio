import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;

export default function WebDev() {
    return (
      <div>
        <div className="full-container">
          <div className="top-wrapper">
            <h1 className="top-title">Web Development</h1>
            <ScrollTo to="full-container" smooth={true}>
              <FontAwesomeIcon icon={faChevronDown} />
            </ScrollTo>
          </div>
        </div> 
      </div>
    );
  }