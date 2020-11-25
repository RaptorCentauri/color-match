import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';
 
const Titlebar = (props) =>{

    const context = React.useContext(AppContext)

    return(
        <title-bar>
                <current-level>Level: {context.level}</current-level>
                <title-name>Color Match</title-name>
                <current-score>Score: {context.score}</current-score>
        </title-bar>
    )
}

export default Titlebar;
