import React from 'react';
import './Titlebar.scss';



const Titlebar = (props) => 
<div className={`titlebar-style`}>
    <h1>Color Match Game</h1>
    <div className={`score-style`}>
        <div>Score: {props.score}</div>
        <div>Level: {props.level}</div>
    </div>
</div>

export default Titlebar;

