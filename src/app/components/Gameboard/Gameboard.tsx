import * as React from 'react';
import './Gameboard.scss';
import Square from '../Square/Square';
import  {AppContext} from '../../contextAndProvider';

const Gameboard = () =>
    <AppContext.Consumer>
        {(context) => (
          <game-board class={`board-size-${Math.sqrt(context.board.size)}`}>
        {context.board.keysAsArray.map(i =>
        //@ts-ignore
               <Square key={i}
                  id={i}
                  value={context.board.getValueOfID(i)}
                  />
                )}
          </game-board>
        )}
    </AppContext.Consumer>


export default Gameboard;
