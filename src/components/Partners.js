import React from 'react';
import './partners.css'; // Import the CSS file for the component

import instagramLogo from '../img/instagramLogo.png';
import nikeLogo from '../img/nikeLogo.jpg';
import twitterLogo from '../img/twitterLogo.png';
import uberLogo from '../img/uberLogo.png';
import youtubeLogo from '../img/youtubeLogo.png';
import festive from '../img/festive.png';

const logos = [nikeLogo, instagramLogo, uberLogo, twitterLogo, youtubeLogo, festive];

const Partners = () => {
  return (
    <div className="partners">
      <h1 className="partners-heading">OUR PARTNERS</h1>
      <div className="logo-carousel">
        <div className="carousel-inner">
          {logos.map((logo, index) => (
            <div className="carousel-item" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;