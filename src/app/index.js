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
            boardItterator: gameBoard.keysAsArray
        }

    }
  

    fullPlay = (i) => {
        this.state.board.destroyChainfromID(i)
        this.setState({board: this.state.board })

        this.state.board.dropDown();
        this.setState({board: this.state.board })

        let genRandNum = () => Math.floor(Math.random()* 4)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })

    }

    handlePlay = (i) => {
        this.state.board.destroyChainfromID(i)
        this.setState({board: this.state.board })

    }

    handleSquareClick = (i) => {
        this.state.board.dropDown();
        this.setState({board: this.state.board })
    }

    handleSquareClickDELETE = () =>{
        let genRandNum = () => Math.floor(Math.random()* 4)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })
    }

    setStyleFromValue = (i) =>{
        if (i === 0) return 'blue'
        if (i === 1) return 'red'
        if (i === 2) return 'green'
        if (i === 3) return 'yellow'
    }

    componentDidMount = () => {
        console.log(this.state.board);
    }

    render() {
        return (
            <div className='App'>
                <div className='board-frame'>


                {this.state.boardItterator.map(i => <Square key={i} 
                    value={this.state.board.getValueOfId(i)}
                    clickHandler={this.fullPlay.bind(this, i)}
                    // colorValue={this.setStyleFromValue(3)}




                />)}

                </div>
                <button onClick={this.handleSquareClick}>DROP BOARD!</button>   
                <button onClick={this.handleSquareClickDELETE}>REFILL BOARD!</button>   
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
