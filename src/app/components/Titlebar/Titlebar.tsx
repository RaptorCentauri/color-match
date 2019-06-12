import * as React from 'react';
import './Titlebar.scss';
import { AppContext } from '../../contextAndProvider';

const Titlebar = (props) =>{

  const context = React.useContext(AppContext);

  return(
    <div className={`titlebar-style`}>
        <div className={`title`}>Color Match</div>
        <div className={`score-style`}>
            <div className={`titleGroup`}><div className={`titleLabel`}>Score:</div> {context.state.score}</div>
            <div className={`titleGroup`}><div className={`titleLabel`}>Level:</div> {context.state.level}</div>
        </div>
    </div>
  )
}

export default Titlebar;
