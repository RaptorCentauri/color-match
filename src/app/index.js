import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import Square from './components/square/square.jsx';
import createMatrix from '../createMatrix';

class App extends React.Component {
    state = {
        nums: createMatrix(5,5)
        // ltr: [
        //     ['a', 'b', 'c', 'd', 'e'],
        //     ['f', 'g', 'h', 'i', 'j'],
        //     ['k', 'l', 'm', 'n', 'o'],
        //     ['p', 'q', 'r', 's', 't'],
        //     ['u', 'v', 'w', 'x', 'y']
        // ]
    }






    drawSquare = (arr) => {
        return arr.map(row => 
            row.map(col => 
            <Square
                letter={col} 
                rowPos={arr.indexOf(row)} 
                colPos={row.indexOf(col)}
                getCoordinates={this.getCoordinates.bind(this, arr.indexOf(row), row.indexOf(col))}
            />))
    }

    getCoordinates = (row, col) => {
        console.log(`row: ${row}, col: ${col}`);

        this.getValue(this.state.nums, row, col);
        this.deleteItem(this.state.nums, row, col);
        console.log(this.state.nums);
        this.setState({num: this.setState.nums})
        

    }

    getValue = (arr, row, col) => {
        let val = arr[row][col];
        console.log('val', val);
    }

    deleteItem = (arr, row, col) => {
        arr[row][col] = null;
    }


    render() {
        // {this.createMatrix(5,5)}
        return (
            <div className='App'>
                {this.drawSquare(this.state.nums)}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
