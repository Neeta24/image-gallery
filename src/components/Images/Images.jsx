// eslint-disable-next-line no-unused-vars
import React from 'react';

const Images = ({imageData}) => {
    return (
        <div>
            {imageData && imageData.map((image,index)=>{
                return (
                    <div key={index}>
                   <img src={image.img} alt="" />
                    </div>
                )
            })}
        </div>
    );
};

export default Images;