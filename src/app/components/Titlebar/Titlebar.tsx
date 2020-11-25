import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';
 
const Titlebar = (props) =>{

    const {level,score} = React.useContext(AppContext)

    return(
        <title-bar>
                <current-level>Level: {level}</current-level>
                <title-name>Color Match</title-name>
                <current-score>Score: {score}</current-score>
        </title-bar>
    )
}

export default Titlebar;
