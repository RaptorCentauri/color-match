import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) =>{
    const context = React.useContext(AppContext)
return(
<game-over>
    GAME OVER
    <play-again-btn onClick={context.playAgain}>Play Again?</play-again-btn>
</game-over>
)
}

export default Gameover;
