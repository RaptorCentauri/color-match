import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Titlebar from './components/Titlebar/Titlebar.jsx'
import Gameover from './components/Gameover/Gameover';
import Gameboard from './components/Gameboard/Gameboard';
import MyProvider from './context/MyProvider';
import MyContext from './context/MyContext';



class App extends React.Component {
    render() {
        return (
            <MyProvider>
            <div className='App'>
                <Titlebar />
                <MyContext.Consumer>
                    {(context) => (
                            <div className={`board-frame`}>
                                {context.state.gameOver === true ?  <Gameover /> : false}
                                <Gameboard />
                            </div>
                    )}
                </MyContext.Consumer>
            </div>
            </MyProvider>
        );
    }
}

render(<App />, window.document.getElementById('root'));
