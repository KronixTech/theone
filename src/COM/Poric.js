import React from 'react';
import './Poric.css'; // Importing the dedicated CSS file


// NOTE: Replace these placeholder URLs with the actual paths to your images.
import largeImageUrl from '../Assets/pp3.jpg';
import smallImageUrl from '../Assets/pp2.jpg';
import closeupImage from '../Assets/pp1.jpg'; // Assuming you named the B&W close-up this
import eyesImage from '../Assets/pp15.jpg'; // Assuming you named the color eyes portrait this
import photo1 from '../Assets/pp4.jpg';
import photo2 from '../Assets/pp6.jpg';
import photo3 from '../Assets/pp8.jpg';
import lastimg from '../Assets/pp16.jpg';
// Assuming you named the color eyes portrait this
const Poric = () => {
    return (
        <>
            <div className="poric-container">
                <h1 className="poric-title">PORTRAIT PHOTOGRAPHY</h1>

                <p className="poric-text">
                    The world of portraiture for me is not just about capturing external beauty, but more importantly reflecting the essence of each
                    personality. Through unique shots, I strive to transport the viewer on an emotional journey, showcasing the uniqueness of each
                    person photographed. Whether it's a business portrait or an artistic individual portrait, my goal is to capture the moments that make
                    up everyone's unique story.
                </p>

                <div className="poric-gallery">
                    {/* Large Color Image */}
                    <div className="poric-image-large">
                        <img
                            src={largeImageUrl}
                            alt="Color portrait of a woman in a dark blazer"
                        />
                    </div>

                    {/* Small Black and White Image */}
                    <div className="poric-image-small">
                        <img
                            src={smallImageUrl}
                            alt="Black and white artistic portrait of a woman"
                        />
                    </div>
                </div>
                <div className="overlap-portraits-container">
                    <div className="overlap-portrait-one">
                        <img
                            src={closeupImage}
                            alt="Close-up black and white portrait of lips and chin"
                        />
                    </div>
                    <div className="overlap-portrait-two">
                        <img
                            src={eyesImage}
                            alt="Color close-up portrait focusing on a woman's eyes"
                            className=''
                        />
                    </div>
                </div>
                <div className="grid-container">

                    {/* 1. Top-Left Photo */}
                    <div className="image-wrapper top-left">
                        <img src={photo1} alt="Close-up with deep shadow" className="photo-image" />
                    </div>

                    {/* 2. Bottom-Left Photo */}
                    <div className="image-wrapper bottom-left">
                        <img src={photo2} alt="Portrait of woman with hands on head" className="photo-image" />
                    </div>

                    {/* 3. Center-Right Photo (The main photo) */}
                    <div className="image-wrapper center-right">
                        <img src={photo3} alt="Full-body shot in sports bra and jeans" className="photo-image" />
                    </div>

                </div>

            </div>
            <img src={lastimg} className="poric-footer-image" alt="Footer Visual" />
        </>
    );
};

export default Poric;