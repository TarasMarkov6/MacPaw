import React from 'react';
import { useState } from 'react';
import classes from '../styles/CardsContainer.module.css';
import CardBlock from './CardBlock.jsx';

const CardsContainer = ({pickBlock,allCardStatus}) => {
    const [cards,setCards] = useState(
        [
            {
                url: '/media/vote-table.png',
                color: '#B4B7FF',
                text: 'voting',
                active: false,
            },
            {
                url: '/media/pet-breeds.png',
                color: '#97EAB9',
                text: 'breeds',
                active: false,
            },
            {
                url: '/media/images-search.png',
                color: '#FFD280',
                text: 'gallery',
                active: false,
            },
        ]
    )

    if (!allCardStatus) cards.forEach(card => card.active = false);
    
    let setActive = function(index) {
        cards.forEach(card => card.active = false);
        cards[index].active = true;
        setCards(cards);
    }
    return (
        <div className={classes.cards_container}>
            {cards.map((card,index) => {
                return <CardBlock 
                    url={card.url} 
                    color={card.color} 
                    text={card.text} 
                    key={index} index={index} 
                    pickBlock={(index)=>pickBlock(index)} 
                    setActive={(index)=>setActive(index)}
                    active={card.active}
                />
            })}
        </div>
    );
}

export default CardsContainer;