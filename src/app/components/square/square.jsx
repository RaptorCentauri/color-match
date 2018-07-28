import React from 'react';
import './square.scss';

const Square = (props) => 
<div onClick={props.clickHandler} className='square-style'>
    <h5>{props.value}</h5>
</div>

export default Square;

