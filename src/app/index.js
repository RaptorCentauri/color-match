import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Square from './components/square/square.jsx';
import createMatrix from '../gameLogic/createMatrix';

class App extends React.Component {
    state = {
        nums: createMatrix(5,5)
    }


    handleSquareClick = () => {
        console.log('clicked');
    }

    drawGameBoard = (arr) => {
        return arr.map(row => 
            row.map(col => 
            <Square
                letter={col} 
                rowPos={arr.indexOf(row)} 
                colPos={row.indexOf(col)}
                handleSquareClick={this.handleSquareClick}
                // getCoordinates={this.getCoordinates.bind(this, arr.indexOf(row), row.indexOf(col))}
            />))
    }



    render() {
        return (
            <div className='App'>
                {this.drawGameBoard(this.state.nums)}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
