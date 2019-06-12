import * as React from 'react';
import './Gameboard.scss';
import Square from '../Square/Square';
import  {AppContext} from '../../contextAndProvider';

const Gameboard = () =>{

const context = React.useContext(AppContext);

return(
    <div className={`board-size-${Math.sqrt(context.state.board.size)}`}>
        {context.state.boardItterator.map(i =>
         <Square key={i}
            id={i}
            value={context.state.board.getValueOfID(i)}
            />
          )}
    </div>
  )
}


export default Gameboard;
