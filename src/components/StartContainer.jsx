import React from 'react';
import classes from '../styles/StartContainer.module.css';
import CardsContainer from './CardsContainer.jsx';

const StartContainer = ({pickBlock,allCardStatus}) => {
    return (
        <section className={classes.start_container}>
            <div className={classes.hi_text}>
                Hi!&#128075;
            </div>
            <div className={classes.welcome_text}>
                Welcome to MacPaw Bootcamp 2023
            </div>
            <div className={classes.start_text}>
                Lets start using The Cat API
            </div>
            <CardsContainer pickBlock={(index)=>pickBlock(index)} allCardStatus={allCardStatus}/>
        </section>
    )
}

export default StartContainer;