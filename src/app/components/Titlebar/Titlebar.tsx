import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';

const Titlebar = (props) =>
<title-bar class={`titlebar-style`}>
    <title-name class={`title`}>Color Match</title-name>
    <AppContext.Consumer>
        {(context) => (
                <score-box class={`score-style`}>
                    <current-score class={`titleGroup`}>Score: {context.state.score}</current-score>
                    <current-level class={`titleGroup`}>Level: {context.state.level}</current-level>
                </score-box>
        )}
    </AppContext.Consumer>
</title-bar>

export default Titlebar;
