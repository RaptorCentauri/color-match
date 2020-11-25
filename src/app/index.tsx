import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard, Gameover,Boardframe} from './components'

const App = (props) => {

        return (
            <AppProvider>
            <color-match class='App'>
                <Titlebar />
                    <Boardframe>
                        <Gameboard />
                    </Boardframe>
            </color-match>
            </AppProvider>
        );
}


render(<App />, window.document.getElementById('root'));
