import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';

const Square = ({value,id}) => {
    const [animateClass, setAnimateClass] = React.useState('inital');

    React.useEffect(()=>{
        value ? setAnimateClass('drop') : setAnimateClass('destroy')
    })

    return (
        <AppContext.Consumer>
            {(context) => (
                <colored-square onClick={()=>context.squareClick(id)} 
                    class={`square-color-${value} square-animate-${animateClass}`}>
                </colored-square>
            )}
        </AppContext.Consumer>
    )
}

export default Square;
