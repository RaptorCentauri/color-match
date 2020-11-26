import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard,Boardframe} from './components'

const App = (props) => {
    return (
        <AppProvider>
            <color-match>
                <Titlebar />
                    <Boardframe>
                        <Gameboard />
                    </Boardframe>
            </color-match>
        </AppProvider>
    );
}


render(<App />, window.document.getElementById('root'));
