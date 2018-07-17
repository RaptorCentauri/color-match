import React from 'react';
import { render } from 'react-dom';
import Square from './components/square/square.jsx';

class App extends React.Component {
    state = {
        // row: ['a','b', 'c', 'd', 'e'],
        ltr: [
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', 'i', 'j'],
            ['k', 'l', 'm', 'n', 'o'],
            ['p', 'q', 'r', 's', 't'],
            ['u', 'v', 'w', 'x', 'y']
        ]
    }


    drawSquare = (arr) => {
        return arr.map(row => 
            row.map(col => 
            <Square letter={col} 
                    rowPos={arr.indexOf(row)} 
                    colPos={row.indexOf(col)}
                    getCoordinates={this.getCoordinates.bind(this, arr.indexOf(row), row.indexOf(col))}
            />))
    }

    getCoordinates = (row, col) => {
        console.log(`row: ${row}, col: ${col}`);
        
    }

    render() {
        return (
            <div className='App'>
                {this.drawSquare(this.state.ltr)}
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
