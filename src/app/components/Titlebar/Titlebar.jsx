import React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';




const Titlebar = (props) => 
<div className={`titlebar-style`}>
    <h1>Color Match Game</h1>
    <AppContext.Consumer>
        {(context) => (
                <div className={`score-style`}>
                    <div>Score: {context.state.score}</div>
                    <div>Level: {context.state.level}</div>
                </div>
        )}

    </AppContext.Consumer>

</div>

export default Titlebar;

