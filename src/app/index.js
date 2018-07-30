import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from '../gameLogic/MatrixClass/Matrix.js'
import Square from './components/square/square.jsx'

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

    setGameOver = () => {
        this.state.board.setValueOfid(1, 2);
        this.state.board.setValueOfid(2, 1);
        this.state.board.setValueOfid(3, 2);
        this.state.board.setValueOfid(4, 1);
        this.state.board.setValueOfid(5, 2);
        this.state.board.setValueOfid(6, 1);
        this.state.board.setValueOfid(7, 2);
        this.state.board.setValueOfid(8, 1);   
        
        this.state.board.setValueOfid(9, 2);
        this.state.board.setValueOfid(10, 1);
        this.state.board.setValueOfid(11, 2);
        this.state.board.setValueOfid(12, 1);
        this.state.board.setValueOfid(13, 2);
        this.state.board.setValueOfid(14, 1);
        this.state.board.setValueOfid(15, 2);
        this.state.board.setValueOfid(16, 1);


        this.state.board.setValueOfid(17, 2);
        this.state.board.setValueOfid(18, 1);
        this.state.board.setValueOfid(19, 2);
        this.state.board.setValueOfid(20, 1);
        this.state.board.setValueOfid(21, 2);
        this.state.board.setValueOfid(22, 1);
        this.state.board.setValueOfid(23, 2);
        this.state.board.setValueOfid(24, 1);
        this.state.board.setValueOfid(25, 2);


        this.setState({board: this.state.board})

    }


    gameOverCheck = (i) =>{
        let hasEquivalentNeighbors = this.state.board.hasEquivalentNeighbors(i);
        if(!hasEquivalentNeighbors){
            if (i < this.state.board.size) {
                // let k = i+2
                this.gameOverCheck(i+2)
            }
            else{
                console.log('GAME OVER!');
            }
        }
    }


    // checkEquivalentNeighbors = (i) =>{
    //     let O = this.gameOverCheck();
    //     console.log('Over', O);
        
    //     // let N = this.state.board.getEquivalentNeighbors(i);
    //     // console.log('N', N.size);
    // }

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
                <button onClick={this.setGameOver}>Set Game Over</button>
                <button onClick={this.gameOverCheck.bind(this, 1)}>CHECK for Game Over</button>


            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
