import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';


const Square = ({value, id}) => {

    const {squareClick} = React.useContext(AppContext);
    const [animateClass, setAnimateClass] = React.useState('initial');

    React.useEffect(()=>{
      value ? setAnimateClass('drop') : setAnimateClass('destroy')
    })

    return(
        <div onClick={squareClick.bind(this, id)}
        className={`id-${id} square-style square-color-${value} square-animate-${animateClass}`}>
        </div>
    )
}


export default Square;
