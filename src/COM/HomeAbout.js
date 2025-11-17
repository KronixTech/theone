import React from 'react';
import './HomeAbout.css'; // Updated CSS import
import Header from './Header';
import About from './About';
import Footer from './Footer';

// In a real project, you would import your images:
// import imageA from './path/to/image-a.jpg'; // The bottom/right image
// import imageB from './path/to/image-b.jpg'; // The top/left image

const HomeAbout = () => { // Renamed component
  return (
    <div className="home-about-section"> {/* Updated class name */}
   <Header />
    <About />
    <Footer />     
  </div>
  );
};

export default HomeAbout; // Export renamed component