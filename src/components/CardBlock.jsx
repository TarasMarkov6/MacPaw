import React from 'react';
import CardImage from './CardImage.jsx';
import CardText from './CardText.jsx';
import classes from '../styles/CardBlock.module.css'


const CardBlock = ({url,color,text,index,pickBlock,setActive,active}) => {
    return (
        <div className={
            (active) 
            ? [classes.card_block,classes.active].join(' ')
            : classes.card_block
        }
            onClick={()=>{
                pickBlock(index);
                setActive(index);
            }}
        >
            <CardImage url={url} color={color} />
            <CardText text={text} />
        </div>
    )
}

export default CardBlock;