import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard, Gameover} from './components'

class App extends React.Component {
    render() {
        return (
            <AppProvider>
            <color-match class='App'>
                <Titlebar />
                <AppContext.Consumer>
                    {(context) => (
                            <board-frame class={`board-frame`}>
                                {context.state.gameOver === true ?  <Gameover /> : false}
                                <Gameboard />
                            </board-frame>
                    )}
                </AppContext.Consumer>
            </color-match>
            </AppProvider>
        );
    }
}


render(<App />, window.document.getElementById('root'));
