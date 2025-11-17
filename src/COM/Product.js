import React from 'react';
import './Product.css'; // Import the CSS file
import Gallery from './Gallery';

// Replace these with the actual image imports in a real project
// For this example, we'll assume they are available via CSS background or absolute paths.
// import lipstickImage from './path/to/lipstick.jpg';
// import cokeImage from './path/to/coke.jpg';

const ProductPhotography = () => {
    return (
        <div className="product-photography-section">



            <div className="content-area">
                <h2 className="section-title">PRODUCT PHOTOGRAPHY</h2>
                <p className="section-description">
                    In today's competitive digital market, superior
                    visuals are non-negotiable. We provide professional
                    product photography services designed to boost your sales
                    and conversion rates across all platforms, including Amazon
                    Shopify, and your dedicated e-commerce site. From crisp white
                    background product photos to engaging lifestyle product photography
                    , we capture the essence of your brand and product.
                </p>
                <Gallery />
            </div>
        </div>
    );
};

export default ProductPhotography;