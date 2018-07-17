import React from 'react';
import './square.scss';

const Square = (props) => 
<div onClick={props.getCoordinates} className='square-style'>
    <h5>Ltr. {props.letter}</h5>
    {/* <h5>row: {props.rowPos}</h5> */}
    {/* <h5>col: {props.colPos}</h5> */}
</div>

export default Square;