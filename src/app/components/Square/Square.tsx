import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';

const Square = ({value,id}) => {
    const [animateClass, setAnimateClass] = React.useState('initial')

    React.useEffect(()=>{
        value ? setAnimateClass('drop') : setAnimateClass('destroy')
    })

    return (
        <AppContext.Consumer>
            {(context) => (
                <colored-square onClick={()=>context.squareClick(id)} 
                    class={`id-${id} square-style square-color-${value} square-animate-${animateClass}`}>
                </colored-square>
            )}
        </AppContext.Consumer>
    )
}

export default Square;