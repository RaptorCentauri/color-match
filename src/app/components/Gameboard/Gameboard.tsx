import * as React from 'react';
import './Gameboard.scss';
import Square from '../Square/Square';
import  {AppContext} from '../../contextAndProvider';

const Gameboard = () =>{

  const context=React.useContext(AppContext)

return(
          <game-board class={`board-size-${Math.sqrt(context.board.size)}`}>
        {context.board.keysAsArray.map(i =>
        //@ts-ignore
               <Square key={i}
                  id={i}
                  value={context.board.getValueOfID(i)}
                  />
                )}
          </game-board>
)
        }



export default Gameboard;
