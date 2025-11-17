import React from 'react';
import './ProductPhotography.css'; // Import the CSS file

// Import the actual images
import lipstickImage from '../Assets/p-lips.png';
import cokeImage from '../Assets/p-bottle.png';

const ProductPhotography = () => {
  return (
    <div className="product-photography-section">

      <div className="image-gallery">
        {/* Left Image: Lipsticks on Orange Background */}
        <div className="image-container">
          <img src={lipstickImage} alt="Two lipsticks on an orange background" className="lipstick-shot" />
        </div>

        {/* Right Image: Coca-Cola Can on Black Background */}
        <div className="image-container">
          <img src={cokeImage} alt="Coca-cola can with water droplets on a black background" className="coke-shot" />
        </div>
      </div>

      <div className="content-area">
        <h2 className="section-title">PRODUCT PHOTOGRAPHY</h2>
        <p className="section-description">
          Whether you are a small business owner, a luxury product brand, or a craft creator, my product
          photography skills will help you stand out in the market.
        </p>
        <a href='Product'><button className="see-more-button">SEE MORE</button></a>
      </div>
    </div>
  );
};

export default ProductPhotography;