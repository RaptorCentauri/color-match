import React from 'react';
import './square.scss';

const Square = (props) => 
<div onClick={props.getCoordinates} className='square-style'>
    <h5>{props.letter}</h5>
</div>

export default Square;