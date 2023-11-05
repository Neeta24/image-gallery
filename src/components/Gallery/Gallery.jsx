// eslint-disable-next-line no-unused-vars
import React from 'react';
import './gallery.css';
import Images from '../Images/Images';

const Gallery = () => {

    const imageData = [
        
            {
                img:'/public/images/image-1.webp'
            },
            {
                img:'/public/images/image-2.webp'
            },
            {
                img:'/public/images/image-3.webp'
            },
            {
                img:'/public/images/image-4.webp'
            },
            {
                img:'/public/images/image-4.webp'
            },
            {
                img:'/public/images/image-6.webp'
            },
            {
                img:'/public/images/image-7.webp'
            },
            {
                img:'/public/images/image-8.webp'
            },
            {
                img:'/public/images/image-9.webp'
            },
            {
                img:'/public/images/image-10.jpeg'
            },
            {
                img:'/public/images/image-11.jpeg'
            }
        
    ]

    return (
        <div>
            <Images imageData={imageData}></Images>
        </div>
    );
};

export default Gallery;