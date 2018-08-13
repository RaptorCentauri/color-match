import React from 'react';
import './square.scss';
import MyContext from '../../context/MyContext';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: this.props.value,
            animateClass: 'initial'
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
            if (nextProps.value === null) {
                return {animateClass: 'destroy'}
            }

            if (nextProps.value != null) {
                return {value: nextProps.value, animateClass: 'drop'}
            }
        else return null;
    }

    render(){
        return(
            <MyContext.Consumer>
            {(context) => (
                    <div onClick={context.squareClick.bind(this, this.props.id)} 
                    className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
                    </div>
            )}
    
        </MyContext.Consumer>




        
        )
    }

}



export default Square;

