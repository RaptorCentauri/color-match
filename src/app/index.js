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
        let genRandNum = () => Math.floor((Math.random() * 3) + 1)
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
        return level+1;
    }

    calculateMoveScore = (value, count) => {
        let moveScore = value * count;
        return moveScore;
    }



    setGameOver = () => {
        // for (let i = 1; i <= this.state.board.size ; i++) {
        //     if (this.state.board.westEdge.has(i)) {
        //         this.state.board.setValueOfid(i, 2);                        
        //     }
        //     else if (this.state.board.eastEdge.has(i)){
        //         this.state.board.setValueOfid(i, 1);
        //     }
        //     else if(i % 2 === 0){
        //         this.state.board.setValueOfid(i, 1);
        //     }
        //     else{
        //         this.state.board.setValueOfid(i, 2);
        //     } 
        // }
        
        for (let i = 1; i <= this.state.board.size ; i++) {
            if (i%2===0) {
                this.state.board.setValueOfid(i, 2);
            }
            else{
                this.state.board.setValueOfid(i, 1);
            }
        }


         this.setState({board: this.state.board})
    }

    playGame = (board, i) => {
        let round ={
            board: board,
            score: 0
        }  

        if (board.getChainfromID(i).size > 1) {
            let value = board.getValueOfId(i);
            round.score = this.calculateMoveScore(value, board.getChainfromID(i).size);
        }

        board.destroyChainfromID(i)
        board.dropDown();


        let genRandNum = () => Math.floor((Math.random() * 3) + 1)
        board.fillEmptyValues(genRandNum)

        return round
    }


    handleSquareClick = (i) => {
        let round = this.playGame(this.state.board, i);
        this.setState({board: round.board })
        this.setState({score: this.state.score + round.score})
    }


    
    checkForGameOver = (board, i) =>{
        do {
            if (board.hasEquivalentNeighbors(i)){
                return false
            }
            i++ 
        } while (i<=board.size);

        return true;
    }


    GOBUTTON = () => {
        let go = this.checkForGameOver(this.state.board, 1);
        console.log('GAME IS OVER', go);
        
    }

    componentDidUpdate = () =>{
        
        let newLevel = this.levelUp(this.state.score);

        if (newLevel > this.state.level) {
            this.setState({level: newLevel})
        }

        //check Game over
        let isG = this.checkForGameOver(this.state.board, 1);
        console.log('GameOVER:', isG);
        

        // if (isG) {
        //     console.log('game is over');
        // }
        // else{
        //     console.log('game is not over');
        // }



    }


    render() {
        return (
            <div className='App'>
                <div className={`board-frame-${this.state.board.size}`}>
                    {this.state.boardItterator.map(i => <Square key={i} 
                        value={this.state.board.getValueOfId(i)}
                        id={i}
                        size={this.state.board.size}
                        clickHandler={this.handleSquareClick.bind(this, i)}
                    />)}
                </div>
                <Score score={this.state.score} level={this.state.level}/>
                {this.state.gameOver.toString()}
                <button onClick={this.setGameOver}>SET GAME OVER</button>
                <button onClick={this.GOBUTTON}>GO CHECK</button>  
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
