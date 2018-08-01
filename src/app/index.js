import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from 'matrix-map';
import Square from './components/square/square.jsx'
import Score from './components/score/score.jsx'


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
  

    levelUp = (score) =>{
        let level = Math.floor((score/100));
        this.setState({level: level+1})
    }

    getScore = (value, count) => {
        let moveScore = value * count;

        let total = this.state.score + moveScore;
        this.setState({score: total})
        this.levelUp(total);
    }

    fullPlay = (i) => {
        let S = this.state.board.getChainfromID(i)
        if (S.size > 1) {
            let value = this.state.board.getValueOfId(i);
            this.getScore(value, S.size)
        }

        this.state.board.destroyChainfromID(i)
        this.setState({board: this.state.board })

        this.state.board.dropDown();
        this.setState({board: this.state.board })


        let genRandNum = () => Math.floor((Math.random() * 4) + 1)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })

        this.gameOverCheck(1)

    }


    gameOverCheck = (i) =>{
        let hasEquivalentNeighbors = this.state.board.hasEquivalentNeighbors(i);

        //even # board
        if(this.state.board.size % 2 === 0){
            if(!hasEquivalentNeighbors){
                if (i < this.state.board.size) {
                    if (this.state.board.westEdge.has(i)) {
                        this.gameOverCheck(i+2)
                    }
                    else if (this.state.board.eastEdge.has(i)){
                        this.gameOverCheck(i+1)
                    }
                    else if(i % 2 === 0){
                        this.gameOverCheck(i+2)
                    }
                    else{
                        this.gameOverCheck(i+3)
                    }
                }
                else{
                    this.setState({gameOver: true})
                }
            }
        }


        //for odd # board
        else{
            if(!hasEquivalentNeighbors){
                if (i < this.state.board.size) {
                    this.gameOverCheck(i+2)
                }
                else{
                    console.log('GAME OVER!');
                }
            }
        }
    }



    componentDidMount = () => {
        if (this.state.gameOver === false) {
            console.log('game over is false');
        }
        else{
            console.log('game over is true');
        }
    }

    componentWillUpdate = () => {
        if (this.state.gameOver === false) {
            // console.log('game over is false');
        }
        else{
            // console.log('game over is true');
            alert('GAME OVER!!')
        }
    }

    render() {
        return (
            <div className='App'>
                <div className={`board-frame-${this.state.board.size}`}>
                    {this.state.boardItterator.map(i => <Square key={i} 
                        value={this.state.board.getValueOfId(i)}
                        id={i}
                        size={this.state.board.size}
                        clickHandler={this.fullPlay.bind(this, i)}
                    />)}
                </div>
                <Score score={this.state.score}/>
                Level:{this.state.level}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
