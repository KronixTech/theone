import React from 'react';
import './Cast.css'; // Importing the dedicated CSS file


// NOTE: Replace these placeholder URLs with the actual paths to your images.
import largeImageUrl from '../Assets/cc5.jpg';
import smallImageUrl from '../Assets/cc12.jpg';
import closeupImage from '../Assets/cc1.jpg'; // Assuming you named the B&W close-up this
import eyesImage from '../Assets/casting-3.jpg'; // Assuming you named the color eyes portrait this
import photo1 from '../Assets/cc6.jpg';
import photo2 from '../Assets/cc7.jpg';
import photo3 from '../Assets/cc4.jpg';
import lastimg from '../Assets/pp14.jpg';
// Assuming you named the color eyes portrait this
const Casting = () => {
    return (
        <>
            <div className="poric-container">
                <h1 className="poric-title">CASTING</h1>

                <p className="poric-text">
                    Maximize your career potential with professional Casting Photography.
                    For actors, models, and performers, your headshot is the essential marketing
                    tool that secures auditions. We specialize in creating high-impact actor
                    headshots and versatile model portfolios that capture your unique personality and
                    character type with industry-standard quality. Don't leave your first impression to chance; invest in compelling casting photos to get
                    noticed by casting directors and talent agents and land your next role.
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

export default Casting;