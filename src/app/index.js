import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from '../gameLogic/MatrixClass/Matrix.js'
import Square from './components/square/square.jsx'

class App extends React.Component {
    constructor(){
        super()
        let gameBoard = new Matrix(25);
        let genRandNum = () => Math.floor(Math.random()* 4)
        gameBoard.fillEmptyValues(genRandNum)

        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray,
            score: 0
        }

    }
  

    getScore = (value, count) => {
        let moveScore = value * count;
        // console.log('v', value);
        // console.log('c', count);

        
        // console.log(moveScore);
        this.setState({score: this.state.score + moveScore})
    }

    fullPlay = (i) => {

        let value = this.state.board.getValueOfId(i);
        // console.log('INV', value);

        let S = this.state.board.getChainfromID(i)
        if (S.size > 1) {
            let value = this.state.board.getValueOfId(i);
            console.log('INV', value);
            this.getScore(value, S.size)
        }

        this.state.board.destroyChainfromID(i)
        this.setState({board: this.state.board })


   




        this.state.board.dropDown();
        this.setState({board: this.state.board })


        let genRandNum = () => Math.floor(Math.random()* 4)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })
    }


    componentDidMount = () => {
        console.log(this.state.board);
    }

    render() {
        return (
            <div className='App'>
                <div className={`board-frame-${this.state.board.size}`}>
                    {this.state.boardItterator.map(i => <Square key={i} 
                        value={this.state.board.getValueOfId(i)}
                        clickHandler={this.fullPlay.bind(this, i)}
                    />)}
                </div>
                Score:{this.state.score}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
