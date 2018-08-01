import React from 'react';
import './square.scss';



const Square = (props) => 
<div onClick={props.clickHandler} className={`square-style square-color-${props.value} square-size-${props.size}`}  >
</div>

export default Square;

