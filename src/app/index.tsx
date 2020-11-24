import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard, Gameover} from './components'

const App = (props) => {
    React.useEffect(()=>{
        
    })

        return (
            <AppProvider>
            <color-match class='App'>
                <Titlebar />
                <AppContext.Consumer>
                    {(context) => (
                            <board-frame class={`board-frame`}>
                                {context.gameOver && <Gameover />}
                                <Gameboard />
                            </board-frame>
                    )}
                </AppContext.Consumer>
            </color-match>
            </AppProvider>
        );
}


render(<App />, window.document.getElementById('root'));
