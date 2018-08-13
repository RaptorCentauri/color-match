import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from 'matrix-map';
import Square from './components/square/square.jsx'
import Titlebar from './components/Titlebar/Titlebar.jsx'
import * as gameLogic from './gameLogic/index';
import Gameover from './components/Gameover/Gameover';

class App extends React.Component {
    constructor(){
        super()
        this.numberOfSquares = 25;
        this.numberOfValues = 10;
        let gameBoard = new Matrix(this.numberOfSquares);
        let genRandNum = () => Math.floor((Math.random() * (this.numberOfValues - 1)) + 1);
        gameBoard.fillEmptyValues(genRandNum)

        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray,
            score: 0,
            level: 1,
            gameOver: false,
        }
    }

    handleSquareClick = (i) => {
        let round = gameLogic.playGame(this.state.board, i);
        this.setState({board: round.board});


        setTimeout(
            () => {
                let drop = gameLogic.dropSquares(this.state.board, this.numberOfValues);
                this.setState({board: drop.board});
            },1000
        );

        this.setState({score: this.state.score + round.score})
    }

    handleNewGameClick = () => {
        let reset = gameLogic.resetBoard(this.state.board, this.numberOfValues);
        this.setState({board: reset.board})
        this.setState({level: 10})
        this.setState({score: 0})
        this.setState({gameOver: false});
    }


    componentDidUpdate = () =>{
        
        let newLevel = gameLogic.levelUp(this.state.score);

        if (newLevel > this.state.level) {
            this.setState({level: newLevel})
        }
        
        let isG = gameLogic.checkForGameOver(this.state.board, 1);


        if (this.state.gameOver != isG) {
            this.setState({gameOver: isG})
        }
    }


    render() {
        return (
            <div className='App'>
                <Titlebar score={this.state.score} level={this.state.level}/>

                <div className={`board-frame `}>
                    {this.state.gameOver === true ?  <Gameover playAgainClick={this.handleNewGameClick} /> : false}

                    <div className={`board-size-${Math.sqrt(this.state.board.size)}`}>
                        {this.state.boardItterator.map(i => <Square key={i}
                            id={i}
                            value={this.state.board.getValueOfId(i)}
                            clickHandler={this.handleSquareClick.bind(this, i)}
                        />)}
                    </div>
         

                </div>

            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
