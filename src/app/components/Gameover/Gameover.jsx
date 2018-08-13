import React from 'react';
import './Gameover.scss';
import MyContext from '../../context/MyContext';



const Gameover = (props) => 
<div className={`Gameover-style`}>
    GAME OVER
    <MyContext.Consumer>
        {(context) => (
                <button className={`play-again-button`} onClick={context.playAgain}>Play Again?</button>
        )}
    </MyContext.Consumer>
</div>

export default Gameover;

