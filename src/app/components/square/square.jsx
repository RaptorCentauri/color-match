import React from 'react';
import './square.scss';

const Square = (props) => 
<div onClick={props.clickHandler} className={`square-style square-color-${props.value} ${props.id}`}>
</div>
export default Square;

