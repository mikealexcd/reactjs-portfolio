import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';
import WobbleChairs from './WobbleChairs';

let ScrollTo = Scroll.Link;


export default function Photography() {
    return (
      <div>
        <div className="full-container">
          <div className="top-wrapper">
            <h1 className="top-title">Photography</h1>
            <ScrollTo to="photos" smooth={true}>
                <FontAwesomeIcon icon={faChevronDown} />
            </ScrollTo>
          </div>
      </div>
      <WobbleChairs />
    </div>
      );
    }