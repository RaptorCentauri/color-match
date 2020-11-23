import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard, Gameover} from './components'

class App extends React.Component {
    render() {
        return (
            <AppProvider>
            <div className='App'>
                <Titlebar />
                <AppContext.Consumer>
                    {(context) => (
                            <div className={`board-frame`}>
                                {context.state.gameOver === true ?  <Gameover /> : false}
                                <Gameboard />
                            </div>
                    )}
                </AppContext.Consumer>
            </div>
            </AppProvider>
        );
    }
}


render(<App />, window.document.getElementById('root'));