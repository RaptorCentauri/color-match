import * as React from 'react';
import Matrix from 'matrix-map';
import * as gameLogic from '../gameLogic/index';
import AppContext from './AppContext';

const AppProvider = props => {
    let gameBoard = new Matrix(gameLogic.numberOfSquares);
    gameBoard.fillEmptyValues(gameLogic.randomValues)

    const [board, setBoard] = React.useState(gameBoard)
    const [score, setScore] = React.useState(0);
    const [level, setLevel] = React.useState(1);
    const [gameover, setGameover] = React.useState(false);
    const [gameRound, setGameRound] = React.useState(1);

    const nextLevelCheck = () => {
        let nextLevel = gameLogic.levelUp(score);

        if (nextLevel > level) {
            setLevel(nextLevel)
        }
    } 

    const gameOverCheck = () => {        
        let isGameover = gameLogic.checkForGameOver(board);
        setGameover(isGameover)
    }

    const playAgain = () => {
        let reset = gameLogic.resetBoard(board, gameLogic.numberOfValues);
        setBoard(reset.board)
        setLevel(1)
        setScore(0)
        setGameover(false)
    }

    const squareClick = (i) => {        
        let round = gameLogic.playGame(board, i);
        setBoard(round.board);

        setTimeout(()=>{
            let drop = gameLogic.dropSquares(board, gameLogic.numberOfValues);
            setBoard(drop.board)
            setGameRound(gameRound+1)
        },1000*0.75)
     

        setScore(score + round.score)
    }

    React.useEffect(()=>{                
        nextLevelCheck();
        gameOverCheck();        
    })

    return (
        <AppContext.Provider 
            value={{
                score,
                level,
                board,
                gameover,
                playAgain,
                squareClick
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;