import * as React from 'react';
import { render } from 'react-dom';
import './index.scss'
import {AppContext, AppProvider} from './contextAndProvider'
import {Titlebar, Gameboard, Gameover} from './components'



const App = () => {
  const context = React.useContext(AppContext)

  React.useEffect(() => {
      console.log('effect use', context)
  }, [])


  return(
        <div className='App'>
            <Titlebar />
              <div className={`board-frame`}>
                  {context.state.gameOver && <Gameover />}
                  <Gameboard />
              </div>
        </div>
  )
}







render(<AppProvider><App /></AppProvider>, window.document.getElementById('root'));
