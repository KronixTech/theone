import React from 'react';
import './Female.css'; // Importing the new CSS file
import male1 from '../Assets/male_1.jpg';
import male2 from '../Assets/male_2.jpg';
import male3 from '../Assets/male_3.jpg';
import male4 from '../Assets/male_4.jpg';
import male5 from '../Assets/male_5.jpg';
import male6 from '../Assets/male_6.jpg';
import male7 from '../Assets/male_7.jpg';
import male8 from '../Assets/male_8.jpg';
import male9 from  '../Assets/male_9.jpg';
import male10 from '../Assets/male_10.jpg';
import male11 from '../Assets/male_11.jpg';
import male12 from '../Assets/male_12.jpg';
import male13 from '../Assets/male_13.jpg';
import male14 from '../Assets/male_14.jpg';
import male15 from '../Assets/male_15.jpg';


// --- Static Data Definition ---
const GALLERY_DATA = [
    {
        id: 1,
        src: male1,
        alt: "male 1",
        caption: "Portrait by Jessica Felicio",
    },
    {
        id: 2,
       src: male2,
       alt: "male 2",
        caption: "Portrait by Oladimeji Odunsi",
    },
    {
        id: 3,
       src: male3,
       alt: "male 3",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 4,
        src: male4,
        alt: "male 4",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 5,
        src: male5,
        alt: "male 5",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 6,
        src: male6,
        alt: "male 6",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 7,
        src: male7,
        alt: "male 7",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 8,
        src: male8,
        alt: "male 8",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 9,
        src: male9,
        alt: "male 9",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 10,
        src: male10,
        alt: "male 10",
        caption: "Portrait by Oladimeji Odunsi",
    },{
        id: 11,
        src: male11,
        alt: "male 11",
        caption: "Portrait by Oladimeji Odunsi",
    },
  
    {
        id: 12,
       src: male12,
         alt: "male 12",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 13,
       src: male13,
       alt: "male 13",
        caption: "Portrait by Dima DallAcqua",
    },{
        id: 14,
        src: male14,
       alt: "male 14",
        caption: "Portrait by Dima DallAcqua",
    },
    {
        id: 15,
       src: male15,
       alt: "male 15",
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
const Male = () => {
    return (
        <div className="page-wrapper">
            <div className="content-container">
                <h1 className="main-heading">
                    Male Models 
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

export default Male;