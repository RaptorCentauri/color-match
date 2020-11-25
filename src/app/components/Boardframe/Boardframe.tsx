import * as React from 'react';
import './Boardframe.scss';
import { AppContext } from '../../contextAndProvider';
import {Gameover} from '../'

const Boardframe = (props) => {

    const context = React.useContext(AppContext)

    return (
        <board-frame>
            {context.gameOver && <Gameover />}
            {props.children}
        </board-frame>
    )
}



export default Boardframe;
