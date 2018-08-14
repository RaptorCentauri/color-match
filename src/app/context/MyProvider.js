import React from 'react';
import MyContext from './MyContext';
import Matrix from 'matrix-map';
import * as gameLogic from '../gameLogic/index';



class MyProvider extends React.Component {
    constructor(){
    super();
    this.numberOfSquares = 16;
    this.numberOfValues = 10;
    let gameBoard = new Matrix(this.numberOfSquares);
    let genRandNum = () => Math.floor((Math.random() * (this.numberOfValues - 1)) + 1);
    gameBoard.fillEmptyValues(genRandNum)
        this.state = {
            board: gameBoard,
            boardItterator: gameBoard.keysAsArray,
            score: 0,
            level: 1,
            gameOver: false,
        }
    }

    componentDidUpdate = () => {
        let newLevel = gameLogic.levelUp(this.state.score);

        if (newLevel > this.state.level) {
            this.setState({level: newLevel})
        }

        // gameOverCheck: () => {
            let isG = gameLogic.checkForGameOver(this.state.board, 1);

            if (this.state.gameOver != isG) {
                this.setState({gameOver: isG})
            }
        // }
        
    }

    render() {
        return(
            <MyContext.Provider value={{
                state: this.state,
                playAgain: () => {
                    let reset = gameLogic.resetBoard(this.state.board, this.numberOfValues);
                    this.setState({board: reset.board})
                    this.setState({level: 1})
                    this.setState({score: 0})
                    this.setState({gameOver: false});
                },
                squareClick: (i) => {
                    let round = gameLogic.playGame(this.state.board, i);
                    this.setState({board: round.board});

                    setTimeout(
                        () => {
                            let drop = gameLogic.dropSquares(this.state.board, this.numberOfValues);
                            this.setState({board: drop.board});
                        },1000
                    );

                    this.setState({score: this.state.score + round.score})

                },
                // nextLevelCheck: () => {
                //     let newLevel = gameLogic.levelUp(this.state.score);

                //     if (newLevel > this.state.level) {
                //         this.setState({level: newLevel})
                //     }

                // },

                // gameOverCheck: () => {
                //     let isG = gameLogic.checkForGameOver(this.state.board, 1);

                //     if (this.state.gameOver != isG) {
                //         this.setState({gameOver: isG})
                //     }
                // }
                
                }}>

                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;