import React from 'react';
import './Gameover.scss';



const Gameover = (props) => 
<div className={`Gameover-style`}>
    GAME OVER
    <button className={`play-again-button`} onClick={props.playAgainClick}>Play Again?</button>
</div>

export default Gameover;

