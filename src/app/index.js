import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from 'matrix-map';
import Square from './components/square/square.jsx'
import Titlebar from './components/Titlebar/Titlebar.jsx'
import * as gameLogic from './gameLogic/index';
import Gameover from './components/Gameover/Gameover';
import Gameboard from './components/Gameboard/Gameboard';
import MyProvider from './context/MyProvider';
import MyContext from './context/MyContext';
// MyContext



class App extends React.Component {

    // componentDidUpdate = () =>{
    //     console.log('indeed');
        
        
    //     // let newLevel = gameLogic.levelUp(this.state.score);

    //     // if (newLevel > this.state.level) {
    //     //     this.setState({level: newLevel})
    //     // }
        
    //     // let isG = gameLogic.checkForGameOver(this.state.board, 1);


    //     // if (this.state.gameOver != isG) {
    //     //     this.setState({gameOver: isG})
    //     // }
    // }


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
