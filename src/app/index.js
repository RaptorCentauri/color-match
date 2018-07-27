import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Matrix from '../gameLogic/experimental/MatrixClass/Matrix.js'

class App extends React.Component {
    constructor(){
        super()
        let gameBoard = new Matrix(16);
        let genRandNum = () => Math.floor(Math.random()* 4)
        gameBoard.fillEmptyValues(genRandNum)

        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray
        }

    }
  


    handleSquareClick = () => {
        console.log('clicked');

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
                {this.state.boardItterator.map(i => <h4>{this.state.board.getValueOfId(i)}</h4>)}
                {/* {this.display()} */}
             
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
