import * as React from 'react';
import Matrix from 'matrix-map';
import * as gameLogic from '../gameLogic/index';
import AppContext from './AppContext';
import ScoreContext from '../contextAndProvider/scoreContext'


const AppProvider = props => {
    const numberOfSquares = 36;
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

        if (gameOver != isGameOver) {
            setGameOver(isGameOver)
        }
    }

    React.useEffect(()=>{                
        nextLevelCheck();
        gameOverCheck()
    })

    // React.useEffect(()=>{
    //    const timer = setTimeout(
    //         () => {
    //             console.log('in timeout');
    //         }, 5000
    //     );
    //     return ()=> clearTimeout(timer)
    // })



    return (
        <AppContext.Provider value={{
             score:score,
             level: level,
             board: board,
             boardItterator: boardItterator,
             
            playAgain: () => {
                let reset = gameLogic.resetBoard(board, numberOfValues);
                setBoard(reset.board)
                setLevel(1)
                setScore(0)
                setGameOver(false)

            },

            squareClick: (i) => {
                let round = gameLogic.playGame(board, i);
                
                setBoard(round.board);

                let drop = gameLogic.dropSquares(board, numberOfValues);

                setTimeout(() => {

                    setBoard(drop.board);
                },3000)
                

                setScore(score+round.score)
            },

        }}>
            {props.children}
        </AppContext.Provider>
    )


}

 
export default AppProvider;
