import React from 'react';
import classes from '../styles/CardText.module.css';

const CardText = ({text}) => {
    return (
        <div 
            className={
                classes.card_text
            }
        > 
            {text}   
        </div>
    )
}

export default CardText;