// FashionPhotographySection.js
import React from 'react';
import './Casting.css'; // Import the dedicated CSS file
// Ensure the path to the image is correct
import castTwoImage from '../Assets/pp3.jpg';

const Castmain = () => {
    return (
        <section className="fashion-photography-section" aria-labelledby="fp-heading">

            <div className="fp-image-container">
                {/* Replace the src with your actual image path */}
                <img
                    src={castTwoImage}
                    alt="Fashion model in a black gown with a high slit against a vibrant red backdrop"
                    className="fp-image"
                />
            </div>

            <div className="fp-content-container">
                <h2 id="fp-heading" className="fp-heading">
                    CASTING
                </h2>

                <p className="fp-description">
                    Through the lens of my camera, I strive not only to capture the beauty
                    of a creation, but also to convey the emotion, style and narrative that
                    each outfit carries.
                </p>

                <a href='Casting'>  <button className="fp-button">
                    SEE MORE
                </button></a>
            </div>
        </section>
    );
};

export default Castmain;