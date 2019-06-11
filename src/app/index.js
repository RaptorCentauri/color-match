import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider/index.js'
import {Titlebar, Gameboard, Gameover} from './components/index.js'

// import Matrix from 'matrix-map';
//
//
// const App = () => {
//   let numberOfSquares = 36;
//   let numberOfValues = 7;
//   let gameBoard = new Matrix(numberOfSquares);
//   let genRandNum = () => Math.floor((Math.random() * (numberOfValues - 1)) + 1);
//   gameBoard.fillEmptyValues(genRandNum)
//
//   const initialState = {
//     board: gameBoard,
//     boardItterator: gameBoard.keysAsArray,
//     score: 0,
//     level: 1,
//     gameOver: false,
//   }
//
//
//
//
//
//
//   return(
//     <AppProvider>
//       <Titlebar initialState={initialState}/>
//       <div className={`board-frame`}>
//           {state.gameOver === true ?  <Gameover /> : false}
//           <Gameboard />
//       </div>
//     </AppProvider>
//   )
// }



class App extends React.Component {
    render() {
        return (
            <AppProvider>
            <div className='App'>
                <Titlebar />
                <AppContext.Consumer>
                    {(context) => (
                            <div className={`board-frame`}>
                                {context.state.gameOver === true ?  <Gameover /> : false}
                                <Gameboard />
                            </div>
                    )}
                </AppContext.Consumer>
            </div>
            </AppProvider>
        );
    }
}


render(<App />, window.document.getElementById('root'));
