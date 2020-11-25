import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) =>
<game-over>
    GAME OVER
    <AppContext.Consumer>
        {(context) => (
                <play-again-btn onClick={context.playAgain}>Play Again?</play-again-btn>
        )}
    </AppContext.Consumer>
</game-over>

export default Gameover;
