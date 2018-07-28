import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from '../gameLogic/experimental/MatrixClass/Matrix.js'
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

    //    let idVal = this.state.board.getValueOfId(i)
        // console.log('idVal',idVal);
    }

    handleSquareClickDELETE = () =>{
        let genRandNum = () => Math.floor(Math.random()* 4)
        this.state.board.fillEmptyValues(genRandNum)
        this.setState({board: this.state.board })
    }



    componentDidMount = () => {
        console.log(this.state.board);

    }

    display = () =>{
        return 
   

    }

    render() {

        return (
            <div className='App'>
                <div className='board-frame'>


                {this.state.boardItterator.map(i => <Square key={i} 
                    value={this.state.board.getValueOfId(i)}
                    // value={i} 
 
                    // clickHandler={this.handlePlay.bind(this, i)}
                    clickHandler={this.fullPlay.bind(this, i)}

                />)}

                </div>


                {/* {this.state.boardItterator.map(i => <h4>{this.state.board.getValueOfId(i)}</h4>)} */}
                {/* {this.display()} */}
                <button onClick={this.handleSquareClick}>DROP BOARD!</button>   
                <button onClick={this.handleSquareClickDELETE}>REFILL BOARD!</button>   

             
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
