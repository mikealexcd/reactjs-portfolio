import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;

export default function Page(props) {
    return (
      <div>
          <div className={`full-container ${ props.background }`}>
            <div className="top-wrapper">
              <h1 className="top-title">{props.title}</h1>
              <ScrollTo to={props.sectionid} smooth={true}>
                <FontAwesomeIcon icon={faChevronDown} />
              </ScrollTo>
            </div>
        </div>
      </div>
    );
  }