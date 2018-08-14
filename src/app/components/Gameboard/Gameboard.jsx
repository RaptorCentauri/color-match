import React from 'react';
import './Gameboard.scss';
import Square from '../square/square';
import { AppContext } from '../../contextAndProvider';

class Gameboard extends React.Component{
    render(){
        return(
            <AppContext.Consumer>
            {(context) => (
                <div className={`board-size-${Math.sqrt(context.state.board.size)}`}>
                    {context.state.boardItterator.map(i => <Square key={i}
                        id={i}
                        value={context.state.board.getValueOfId(i)}
                        />)} 
                </div>
            )}
            </AppContext.Consumer>
        )
    }
}

export default Gameboard;