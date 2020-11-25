import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';

const Square = ({value,id}) => {

    const context=React.useContext(AppContext)
    const [animateClass, setAnimateClass] = React.useState('inital');

    React.useEffect(()=>{
        value ? setAnimateClass('initial') : setAnimateClass('destroy')
    })

    return (
                <colored-square onClick={()=>context.squareClick(id)} 
                    class={`square-color-${value} square-animate-${animateClass}`}>
                </colored-square>
    )
}

export default Square;
