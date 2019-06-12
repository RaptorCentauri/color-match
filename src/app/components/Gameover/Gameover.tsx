import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) =>
<div className={`Gameover-style`}>
    GAME OVER
    <AppContext.Consumer>
        {(context) => (
                <button className={`play-again-button`} onClick={context.playAgain}>Play Again?</button>
        )}
    </AppContext.Consumer>
</div>

export default Gameover;
