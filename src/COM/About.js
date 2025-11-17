import React from 'react';
import './About.css';

// In a real project, you would import your images:
// import imageA from './path/to/image-a.jpg'; // The bottom/right image
// import imageB from './path/to/image-b.jpg'; // The top/left image

const About= () => {
  return (
    <div className="about-section">
      <h1 className="about-title">ABOUT</h1>
      <hr className="about-divider" />

      <div className="about-content-container">
        <div className="about-image-stack">
          {/* Image B (Top, slightly rotated left) */}
          <div className="about-image image-b">
            {/* <img src={imageB} alt="Woman posing in studio with rainbow" /> */}
          </div>
          
          {/* Image A (Bottom, slightly rotated right) */}
          <div className="about-image image-a">
            {/* <img src={imageA} alt="Woman sitting on stairs" /> */}
          </div>
        </div>

        <div className="about-text-block">
          <p>
            My captivating photography work is dedicated to telling visual stories. My focus is on **brand and lifestyle photography**,
            capturing true emotion and personality. It is not about perfect smiles, but moments that speak volumes about a life well-lived.
          </p>
          <p>
            My style of photography is organic and unscripted. It is all about capturing the energy in the moment, as it is. I use a mix
            of **documentary, journalistic, and traditional portrait photography**. I have built a reputation as a compassionate and easy-going
            photographer, that listens to your needs.
          </p>
          <p>
            If you’re looking for someone who understands your vision, who creates **authentic, timeless, and stunning images** for your
            brand, then I'm here. I am available for assignments in the greater metropolitan area and beyond.
          </p>
          <p className="closing-line">
            Let's embark on a journey through the visual world of your brand, together we can create something truly spectacular.
          </p>
          <p className="signature">
            — One Cast
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;