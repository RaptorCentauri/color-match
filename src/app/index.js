import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from 'matrix-map';
import Square from './components/square/square.jsx'
import Score from './components/score/score.jsx'



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


        let genRandNum = () => Math.floor((Math.random() * 4) + 1)
        board.fillEmptyValues(genRandNum)

        return round
    }



    handleSquareClick = (i) => {
        let round = this.playGame(this.state.board, i);
        this.setState({board: round.board })
        this.setState({score: this.state.score + round.score})
    }


    
    checkForGameOver = (board, i) =>{
        let hasEquivalentNeighbors = board.hasEquivalentNeighbors(i);

        //even # board
        if(board.size % 2 === 0){
            if(!hasEquivalentNeighbors){
                if (i < board.size) {
                    if (board.westEdge.has(i)) {
                        this.checkForGameOver(board, i+2)
                    }
                    else if (board.eastEdge.has(i)){
                        this.checkForGameOver(board, i+1)
                    }
                    else if(i % 2 === 0){
                        this.checkForGameOver(board, i+2)
                    }
                    else{
                        this.checkForGameOver(board, i+3)
                    }
                }
                else{
                    console.log('LINE 93 is important');
                    return true;
                }
            }
            else{
                return false;
            }

        }

        //for odd # board
        else{
            if(!hasEquivalentNeighbors){
                if (i < board.size) {
                    this.checkForGameOver(board, i+2)
                }
                else{
                    console.log('LINE 105 is important');
                    
                    return true
                }
            }
        }


    }





    componentDidUpdate = () =>{
        let newLevel = this.levelUp(this.state.score);

        if (newLevel > this.state.level) {
            this.setState({level: newLevel})
        }

        let isGameOver = this.checkForGameOver(this.state.board, 1);
        console.log('IGO', isGameOver);
        

        if (isGameOver) {
            console.log('IGO is true', isGameOver);
            
            this.setState({gameOver: isGameOver})
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
                        clickHandler={this.handleSquareClick.bind(this, i)}
                    />)}
                </div>
                <Score score={this.state.score} level={this.state.level}/>
                {this.state.gameOver.toString()}  
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
