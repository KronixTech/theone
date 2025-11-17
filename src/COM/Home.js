
import React from 'react';
import ProductPhotography from './ProductPhotography';
import PortraitPhotography from './PortraitPhotography';
import HeroSection from './HeroSection';
import Casting from './Castmain';
import './Home.css';
import fimg from "../Assets/pp16.jpg";


function Home() {
    return (
        <div className="Home">
            <HeroSection />
            <Casting />
            <ProductPhotography />
            <PortraitPhotography />
         
          

            <img src={fimg} alt="Footer Visual" className="footer-visual" />

        </div >
    );
}

export default Home;



