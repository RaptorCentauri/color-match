import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from 'matrix-map';
import Square from './components/square/square.jsx'
import Score from './components/score/score.jsx'
import * as gameLogic from './gameLogic/index';

class App extends React.Component {
    constructor(){
        super()
        let gameBoard = new Matrix(25);
        let genRandNum = () => Math.floor((Math.random() * 4) + 1)
        gameBoard.fillEmptyValues(genRandNum)

        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray,
            score: 0,
            level: 1,
            gameOver: false
        }

    }


    handleSquareClick = (i) => {
        let round = gameLogic.playGame(this.state.board, i);
        this.setState({board: round.board })
        this.setState({score: this.state.score + round.score})
    }


    componentDidUpdate = () =>{
        
        let newLevel = gameLogic.levelUp(this.state.score);

        if (newLevel > this.state.level) {
            this.setState({level: newLevel})
        }

        let isG = gameLogic.checkForGameOver(this.state.board, 1);

        // if (isG) {
        //     this.setState({gameOver: true})
        // }

    }


    render() {
        return (
            <div className='App'>
                <Score score={this.state.score} level={this.state.level}/>
                <div className={`board-frame board-size-${Math.sqrt(this.state.board.size)}`}>
                    {this.state.boardItterator.map(i => <Square key={i} 
                        value={this.state.board.getValueOfId(i)}
                        id={i}
                        size={this.state.board.size}
                        clickHandler={this.handleSquareClick.bind(this, i)}
                    />)}
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
