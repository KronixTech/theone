import React from 'react';
import './Female.css'; // Importing the new CSS file
import pro1 from '../Assets/pro1.jpg';
import pro2 from '../Assets/pro2.jpg';
import pro3 from '../Assets/p-tonic.png';
import pro4 from '../Assets/pro4.jpg';
import pro5 from '../Assets/pro5.jpg';
import pro6 from '../Assets/pro6.jpg';
import pro7 from '../Assets/pro7.jpg';
import pro8 from '../Assets/pro8.jpg';
import pro9 from '../Assets/pro9.jpg';
import pro10 from '../Assets/pro10.jpg';    
import pro11 from '../Assets/pro11.jpg';
import pro12 from '../Assets/pro12.jpg';
import pro13 from '../Assets/pro13.jpg';    
import pro14 from '../Assets/pro14.jpg';
import pro15 from '../Assets/pro15.jpg';
import pro16 from '../Assets/pro16.jpg';
import pro17 from '../Assets/pro17.jpg';
import pro18 from '../Assets/pro18.jpg';



// --- Static Data Definition ---
const GALLERY_DATA = [
    {
        id: 1,
        src: pro1,
        alt: "pro 1",
        caption: "Portrait by Jessica Felicio",
    },
    {
        id: 2,
       src: pro2,
        alt: "pro 2",
         caption: "Portrait by Oladimeji Odunsi",
    },
    {
        id: 3,
        src: pro3,
        alt: "pro 3",
          caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 4,
        src: pro4,
        alt: "pro 4",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 5,
        src: pro5,
        alt: "pro 5",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 6,
        src: pro6,
        alt: "pro 6",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 7,
        src: pro7,
        alt: "pro 7",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 8,
        src: pro8,
        alt: "pro 8",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 9,
        src: pro9,
        alt: "pro 9",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 10,
        src: pro10,
        alt: "pro 10",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 11,
        src: pro11,
        alt: "pro 11",
        caption: "Portrait by Oladimeji Odunsi",
    },
  
    {
        id: 12,
       src: pro12,
        alt: "pro 12",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 13,
        src: pro13,
        alt: "pro 13",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 14,
        src: pro14,
        alt: "pro 14",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 15,
      src: pro15,
        alt: "pro 15",
        caption: "Portrait by Oladimeji Odunsi",
    },
     {
        id: 16,
        src: pro16,
        alt: "pro 16",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 17,
        src: pro17,
        alt: "pro 17",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 18,
       src: pro18,
        alt: "pro 18",
        caption: "Portrait by Dima DallAcqua",
    }
];


// Component for a single image item
const GalleryItem = ({ data }) => {
    // Error fallback for images
    const handleError = (e) => {
        e.target.onerror = null; 
        e.target.src = 'https://placehold.co/600x400/4B5563/FFFFFF?text=Image+Error';
    };

    return (
        <div className="gallery-item">
            <figure className="gallery-thumb">
                <img 
                    src={data.src} 
                    alt={data.alt} 
                    onError={handleError}
                    className="gallery-image" 
                />
            </figure>
        </div>
    );
};


// --- Main Gallery Component ---
const Pro = () => {
    return (
        <div className="page-wrapper">
            <div className="content-container">
                <h1 className="main-heading">
                    Product Catalogue
                </h1>
                
                <div className="gallery-container">
                    {GALLERY_DATA.map(item => (
                        <GalleryItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pro;