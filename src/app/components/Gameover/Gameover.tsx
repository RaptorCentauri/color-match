import * as React from 'react';
import './Gameover.scss';
import { AppContext } from '../../contextAndProvider';

const Gameover = (props) => {

const context = React.useContext(AppContext);

    return(
      <div className={`Gameover-style`}>
          GAME OVER
          <button className={`play-again-button`} onClick={context.playAgain}>Play Again?</button>
      </div>
    )
}
export default Gameover;
