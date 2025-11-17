import React from 'react';
import './Female.css'; // Importing the new CSS file
import kid1 from '../Assets/child_1.jpg';
import kid2 from '../Assets/child_2.jpg';
import kid3 from '../Assets/child_3.jpg';
import kid4 from '../Assets/child_4.jpg';   
import kid5 from '../Assets/child_5.jpg';
import kid6 from '../Assets/child_6.jpg';
import kid7 from '../Assets/child_7.jpg';
import kid8 from '../Assets/child_8.jpg';
import kid9 from '../Assets/child_9.jpg';
import kid10 from '../Assets/child_10.jpg';
import kid11 from '../Assets/child_11.jpg';
import kid12 from '../Assets/child_12.jpg';
import kid13 from '../Assets/child_13.jpg';
import kid14 from '../Assets/child_14.jpg';
import kid15 from '../Assets/child_15.jpg';
import kid16 from '../Assets/child_16.jpg';
import kid17 from '../Assets/child_17.jpg';
import kid18 from '../Assets/child_18.jpg';
import kid19 from '../Assets/child_19.jpg';
import kid20 from '../Assets/child_20.jpg';
import kid21 from '../Assets/child_21.jpg';


// --- Static Data Definition ---
const GALLERY_DATA = [
    {
        id: 1,
        src: kid1,
        alt: "kid 1",
        caption: "Portrait by Jessica Felicio",
    },
    {
        id: 2,
       src: kid2,
        alt: "kid 2",
        caption: "Portrait by Oladimeji Odunsi",
    },
    {
        id: 3,
        src: kid3,
        alt: "kid 3",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 4,
         src: kid4,
        alt: "kid 4",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 5,
         src: kid5,
        alt: "kid 5",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 6,
         src: kid6,
        alt: "kid 6",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 7,
         src: kid7,
        alt: "kid 7",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 8,
         src: kid8,
        alt: "kid 8",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 9,
         src: kid9,
        alt: "kid 9",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 10,
         src: kid10,
        alt: "kid 10",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 11,
         src: kid11,
        alt: "kid 11",
        caption: "Portrait by Oladimeji Odunsi",
    },
  
    {
        id: 12,
       src: kid12,
        alt: "kid 12",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 13,
        src: kid13,
        alt: "kid 13",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 14,
         src: kid14,
        alt: "kid 14",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 15,
       src: kid15,
        alt: "kid 15",
        caption: "Portrait by Oladimeji Odunsi",
    },
     {
        id: 16,
         src: kid16,
        alt: "kid 16",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 17,
         src: kid17,
        alt: "kid 17",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 18,
         src: kid18,
        alt: "kid 18",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 19,
         src: kid19,
        alt: "kid 19",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 20,
         src: kid20,
        alt: "kid 20",
        caption: "Portrait by Dima DallAcqua",
    },
     {
        id: 21,
        src: kid21,
        alt: "kid 21",
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
const Kids = () => {
    return (
        <div className="page-wrapper">
            <div className="content-container">
                <h1 className="main-heading">
                    Child Models 
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

export default Kids;