import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) =>
<game-over class={`Gameover-style`}>
    GAME OVER
    <AppContext.Consumer>
        {(context) => (
                <play-again-btn class={`play-again-button`} onClick={context.playAgain}>Play Again?</play-again-btn>
        )}
    </AppContext.Consumer>
</game-over>

export default Gameover;
