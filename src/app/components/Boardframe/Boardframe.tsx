import * as React from 'react';
import './Boardframe.scss';
import { AppContext } from '../../contextAndProvider';
import {Gameover} from '../'

const Boardframe = (props) => {

    const {gameover} = React.useContext(AppContext)
    
    return (
        <board-frame>
            {gameover && <Gameover />}
            {props.children}
        </board-frame>
    )
}



export default Boardframe;
