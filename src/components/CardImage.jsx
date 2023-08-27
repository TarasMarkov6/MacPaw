import React from 'react';
import classes from '../styles/CardImage.module.css';

const CardImage = ({url,color}) => {
    return (
        <div 
            className={
                classes.card_image
            } 
            style={{
                background: `${color}`,
                backgroundImage: `url(${process.env.PUBLIC_URL + url})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </div>
    )
}

export default CardImage;