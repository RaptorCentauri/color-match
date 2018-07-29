import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from '../gameLogic/MatrixClass/Matrix.js'
import Square from './components/square/square.jsx'

class App extends React.Component {
    constructor(){
        super()
        let gameBoard = new Matrix(16);
        let genRandNum = () => Math.floor((Math.random() * 4) + 1)
        gameBoard.fillEmptyValues(genRandNum)

        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray,
            score: 0,
            level: 1
        }

    }
  

    levelUp = (score) =>{
        console.log('SCORE', score );
        
        let level = Math.floor((score/100));
        console.log('LEVEL', level);
        
        this.setState({level: level+1})

        
    }

    getScore = (value, count) => {
        let moveScore = value * count;
        // console.log('v', value);
        // console.log('c', count);

        let total = this.state.score + moveScore;
        // console.log(moveScore);
        this.setState({score: total})
        // this.levelUp()
        this.levelUp(total);

        

  
    }

    fullPlay = (i) => {

        let value = this.state.board.getValueOfId(i);
        // console.log('INV', value);

        let S = this.state.board.getChainfromID(i)
        if (S.size > 1) {
            let value = this.state.board.getValueOfId(i);
            this.getScore(value, S.size)
            // this.levelUp(this.state.score);
        }

        this.state.board.destroyChainfromID(i)
        this.setState({board: this.state.board })


   




        this.state.board.dropDown();
        this.setState({board: this.state.board })


        let genRandNum = () => Math.floor((Math.random() * 4) + 1)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })

    }


    componentDidMount = () => {
        // console.log(this.state.board);
    }

    render() {
        return (
            <div className='App'>
                <div className={`board-frame-${this.state.board.size}`}>
                    {this.state.boardItterator.map(i => <Square key={i} 
                        value={this.state.board.getValueOfId(i)}
                        size={this.state.board.size}
                        clickHandler={this.fullPlay.bind(this, i)}
                    />)}
                </div>
                Score:{this.state.score}
                Level:{this.state.level}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
