import React from 'react';
import './Titlebar.scss';
import MyContext from '../../context/MyContext';



const Titlebar = (props) => 
<div className={`titlebar-style`}>
    <h1>Color Match Game</h1>
    <MyContext.Consumer>
        {(context) => (
                <div className={`score-style`}>
                    <div>Score: {context.state.score}</div>
                    <div>Level: {context.state.level}</div>
                </div>
        )}

    </MyContext.Consumer>

</div>

export default Titlebar;

