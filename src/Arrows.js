import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faGripLines } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
let ScrollTo = Scroll.Link;

export default function Arrows(props) {
    function scrollToTop() {
        return scroll.scrollToTop();
      }

      const totop = props.totop;
      const down = props.down;
    
            return (
                <>
                <div className="top-container" id={props.title}>
                {totop === 'true'
                ? <FontAwesomeIcon icon={faChevronUp} className="arrow-up" onClick={scrollToTop} />
                : totop === 'section' ? <FontAwesomeIcon icon={faGripLines} />
                : <FontAwesomeIcon style={{display:'none'}} icon={faGripLines} />
                }
                {props.children}
                {down === 'true'
                ? <ScrollTo to={props.downtarget} smooth={true}><FontAwesomeIcon icon={faChevronDown} className="arrow-down" /></ScrollTo>
                : <ScrollTo style={{display:'none'}} to={props.downtarget} smooth={true}><FontAwesomeIcon icon={faChevronDown} className="arrow-down" /></ScrollTo>
                }
                </div>
                </>
                )
        }