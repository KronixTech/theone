import React from 'react';
import './Female.css'; // Importing the new CSS file
import female1 from '../Assets/female_1.jpg';
import female2 from '../Assets/female_2.jpg';
import female3 from '../Assets/female_3.jpg';
import female4 from '../Assets/female_4.jpg';
import  female5 from '../Assets/female_5.jpg';
import female6 from '../Assets/female_6.jpg';
import female8 from '../Assets/female_8.jpg';
import female9 from '../Assets/female_9.jpg';
import female10 from '../Assets/female_10.jpg';
import female11 from '../Assets/female_11.jpg';
import female12 from '../Assets/female_12.jpg';
import female13 from '../Assets/female_13.jpg';
import female14 from '../Assets/female_14.jpg';
import female15 from '../Assets/female_15.jpg';

// --- Static Data Definition ---
const GALLERY_DATA = [
    {
        id: 1,
        src: female1,
        alt: "female 1",
        caption: "Portrait by Jessica Felicio",
    },
    {
        id: 2,
       src: female2,
       alt: "female 2",
        caption: "Portrait by Oladimeji Odunsi",
    },
    {
        id: 3,
       src: female3,
       alt: "female 3",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 4,
        src: female4,
        alt: "female 4",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 5,
        src: female5,
        alt: "female 5",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 6,
        src: female6,
        alt: "female 6",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 7,
        src: "https://images.unsplash.com/photo-1542513217-0b0eedf7005d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8M;xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "female 7",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 8,
        src: female8,
        alt: "female 8",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 9,
        src: female9,
        alt: "female 9",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 10,
        src: female10,
        alt: "female 10",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 11,
        src: female11,
        alt: "female 11",
        caption: "Portrait by Oladimeji Odunsi",
    },
  
    {
        id: 12,
       src: female12,
         alt: "f emale 12",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 13,
       src: female13,
       alt: "f emale 13",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 14,
        src: female14,
       alt: "f emale 14",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 15,
       src: female15,
       alt: "female 15",
        caption: "Portrait by Oladimeji Odunsi",
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
const Female = () => {
    return (
        <div className="page-wrapper">
            <div className="content-container">
                <h1 className="main-heading">
                    Female Models 
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

export default Female;