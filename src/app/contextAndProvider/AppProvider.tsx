import * as React from 'react';
import Matrix from 'matrix-map';
import * as gameLogic from '../gameLogic/index';
<<<<<<< HEAD:src/app/contextAndProvider/AppProvider.tsx
import {AppContext} from './AppContext';

// const AppContext = React.createContext();
=======
import AppContext from './AppContext';
>>>>>>> 4dc246ea34d3cade85f8448249d4eb6f19e4ba45:src/app/contextAndProvider/AppProvider.tsx

class AppProvider extends React.Component {
  numberOfSquares: number;
  numberOfValues: number;
  state: { board: any; boardItterator: any; score: number; level: number; gameOver: boolean; };
  setState: any;
  props: any;
    constructor(){
        super();
        this.numberOfSquares = 36;
        this.numberOfValues = 7;
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

    nextLevelCheck = () => {
        let nextLevel = gameLogic.levelUp(this.state.score);

        if (nextLevel > this.state.level) {
            this.setState({level: nextLevel})
        }
    }

    gameOverCheck = () => {
        let isGameOver = gameLogic.checkForGameOver(this.state.board, 1);

        if (this.state.gameOver != isGameOver) {
            this.setState({gameOver: isGameOver})
        }
    }

    componentDidUpdate = () => {
        this.nextLevelCheck();
        this.gameOverCheck();
    }

    render() {
        return(
            <AppContext.Provider value={{
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

                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;
