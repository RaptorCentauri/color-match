import * as React from 'react';
import './Gameboard.scss';
import Square from '../Square/Square';
import  {AppContext} from '../../contextAndProvider';

const Gameboard = () =>{

  const {board}=React.useContext(AppContext)

return(
          <game-board class={`board-size-${Math.sqrt(board.size)}`}>
        {board.keysAsArray.map(i =>
        //@ts-ignore
               <Square key={i}
                  id={i}
                  value={board.getValueOfID(i)}
                  />
                )}
          </game-board>
)
        }



export default Gameboard;
