import React from 'react';
import './Gameboard.scss';
import Square from '../square/square';
import MyContext from '../../context/MyContext';
// import * as gameLogic from '../../gameLogic/index';


class Gameboard extends React.Component{

    componentDidUpdate = (prevProps, prevState) =>{
        console.log('yes updates', prevProps.gameOver);
    }

    render(){
        const {gameOver, children} = this.props;
        return(
            {children}
        )
    }

}



export default props =>(
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
);
























// class Gameboard extends React.Component{

//     componentDidUpdate = (nextState, nextProps, nextContext) =>{
//         console.log('yes updates', nextContext);
        
  
        
//         // this.setState({score: 100})
//         // console.log('LVL', contex.state.level);
//     }

//     render(){
//         return(
//             <MyContext.Consumer>
//             {(context) => (
//                 <div className={`board-size-${Math.sqrt(context.state.board.size)}`}>
//                     {context.state.boardItterator.map(i => <Square key={i}
//                         id={i}
//                         value={context.state.board.getValueOfId(i)}
//                         />)} 
//                 </div>
//             )}
//             </MyContext.Consumer>
//         )
//     }

// }



// export default Gameboard;



