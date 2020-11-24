import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';
import * as ScoreContext from '../../contextAndProvider/scoreContext'
 
const Titlebar = (props) =>
<title-bar class={`titlebar-style`}>
    <title-name class={`title`}>Color Match</title-name>
    <AppContext.Consumer>
        {(context) => (
                <score-box class={`score-style`}>
                    <current-score class={`titleGroup`}>Score: {context.score}</current-score>
                    <current-level class={`titleGroup`}>Level: {context.level}</current-level>
                </score-box>
        )}
    </AppContext.Consumer>
</title-bar>

export default Titlebar;
