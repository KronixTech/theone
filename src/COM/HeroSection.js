import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    // The component wrapper
    <div className="hero-section">
      
      {/* 1. The large "CAPTURE" title visible on the white area */}
      <h1 className="hero-top-title">
        THE ONE CAST
      </h1>
      
      {/* 2. The section with the background image and overlay text */}
      <div className="hero-image-overlay">
        <div className="hero-text-content">
          <h2 className="hero-main-phrase">
            RELEASE EMOTIONS<br />IN PHOTOGRAPHY
          </h2>
          <p className="hero-subtitle">
            Feelings and emotions are most important to me in my work. I strive to capture uncommon moments, creating lasting memories for my clients.
          </p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;