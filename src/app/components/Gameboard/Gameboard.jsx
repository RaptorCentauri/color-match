import React from 'react';
import './Gameboard.scss';
import Square from '../square/square';
import Matrix from 'matrix-map';
import * as gameLogic from '../../gameLogic/index';
import MyContext from '../../context/MyContext';


class Gameboard extends React.Component{
    // componentDidUpdate = (prevContext) =>{
    //         // console.log(`yes it did`, prevContext.state.board);

            
        
        // let newLevel = gameLogic.levelUp(this.state.score);

        // if (newLevel > this.state.level) {
        //     this.setState({level: newLevel})
        // }
        
    // //     let isG = gameLogic.checkForGameOver(this.state.board, 1);


    // //     if (this.state.gameOver != isG) {
    // //         this.setState({gameOver: isG})
    // //     }
    // }

    render(){
        return(
            <MyContext.Consumer>
            {(context) => (
                <div className={`board-size-${Math.sqrt(context.state.board.size)}`}>
                    {context.state.boardItterator.map(i => <Square key={i}
                        id={i}
                        value={context.state.board.getValueOfId(i)}
                        />)} 
                </div>
            )}
            </MyContext.Consumer>
        )
    }

}



export default Gameboard;

