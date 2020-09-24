import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


export default function Ecommerce() {
    return (
      <div className="full-container">
        <div className="top-wrapper">
          <h1 className="top-title">E-Commerce</h1>
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </div>
    </div>
    );
  }