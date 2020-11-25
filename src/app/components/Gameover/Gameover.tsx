import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) =>{
    const {playAgain} = React.useContext(AppContext)
return(
<game-over>
    GAME OVER
    <play-again-btn onClick={playAgain}>Play Again?</play-again-btn>
</game-over>
)
}

export default Gameover;
