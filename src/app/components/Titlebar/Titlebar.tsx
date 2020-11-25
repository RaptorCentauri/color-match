import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';
 
const Titlebar = (props) =>
    <AppContext.Consumer>
        {(context) => (
            <title-bar class={`titlebar-style-new`}>
                    <current-level class={`titleGroup`}>Level: {context.level}</current-level>
                    <title-name class={`title`}>Color Match</title-name>
                    <current-score class={`titleGroup`}>Score: {context.score}</current-score>
            </title-bar>
        )}
    </AppContext.Consumer>

export default Titlebar;
