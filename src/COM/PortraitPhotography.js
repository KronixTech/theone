import React from 'react';
import './PortraitPhotography.css'; // Import the CSS file

// In a real project, you would import your images like this:
// import mainPortraitImage from './path/to/main-portrait.jpg';
// import smallPortraitImage from './path/to/small-portrait.jpg';

const PortraitPhotography = () => {
  return (
    <div className="portrait-photography-section">
      <div className="portrait-image-gallery">
        {/* Main Left Image */}
        <div className="portrait-image-container main-portrait">
          {/* <img src={mainPortraitImage} alt="Woman in dark suit looking away" /> */}
        </div>

        {/* Smaller Right Image */}
        <div className="portrait-image-container small-portrait">
          {/* <img src={smallPortraitImage} alt="Woman in dark suit, black and white" /> */}
        </div>
      </div>

      <div className="portrait-content-area">
        <h2 className="portrait-section-title">PORTRAIT PHOTOGRAPHY</h2>
        <p className="portrait-section-description">
          The world of portraiture for me is not just about capturing external beauty, but more importantly
          reflecting the essence of each personality.
        </p>
        <a href='Portrait'>  <button className="portrait-see-more-button">SEE MORE</button></a>
      </div>
    </div>
  );
};

export default PortraitPhotography;