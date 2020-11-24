import * as React from 'react';
import Matrix from 'matrix-map';
import * as gameLogic from '../gameLogic/index';
import AppContext from './AppContext';


// const changeBoard = (board, state) => {
//     const updatedBoard = [...state.board];

//     return {...state, board: updatedBoard}
// }

// const UPDATE_BOARD = 'UPDATE_BOARD';
// const boardReducer = (state, action) => {
//     switch(action.type){
//         case UPDATE_BOARD:
//             return
//     }
// }


const AppProvider = props => {
    const numberOfSquares = 25;
    const numberOfValues = 7;
    let gameBoard = new Matrix(numberOfSquares);
    let genRandNum = () => Math.floor((Math.random() * (numberOfValues - 1)) + 1);
    gameBoard.fillEmptyValues(genRandNum)

    const [board, setBoard] = React.useState(gameBoard)
    const [boardItterator, setBoardItterator] = React.useState(gameBoard.keysAsArray)
    const [score, setScore] = React.useState(0);
    const [level, setLevel] = React.useState(1);
    const [gameOver, setGameOver] = React.useState(false);

    const nextLevelCheck = () => {
        let nextLevel = gameLogic.levelUp(score);

        if (nextLevel > level) {
            setLevel(nextLevel)
        }
    } 

    const gameOverCheck = () => {        
        let isGameOver = gameLogic.checkForGameOver(board, 1);
        setGameOver(isGameOver)
    }

    const playAgain = () => {
        let reset = gameLogic.resetBoard(board, numberOfValues);
        setBoard(reset.board)
        setLevel(1)
        setScore(0)
        setGameOver(false)
    }

    const squareClick = (i) => {
        let round = gameLogic.playGame(board, i);
        setBoard(round.board);

        let drop = gameLogic.dropSquares(board, numberOfValues);
        setBoard(drop.board)

        setScore(score + round.score)
    }

    React.useEffect(()=>{                
        nextLevelCheck();
        gameOverCheck();        
    })

    return (
        <AppContext.Provider 
            value={{
                score:score,
                level: level,
                board: board,
                boardItterator: boardItterator,
                gameOver: gameOver,
                playAgain: playAgain,
                squareClick: squareClick
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;