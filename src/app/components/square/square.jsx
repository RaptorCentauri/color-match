import React from 'react';
import './square.scss';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: this.props.value,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.value != prevState.value){
            console.log('props are changing');
            return {value: nextProps.value}
        }
        else return null;
    }

    render(){
        return(
            <div onClick={this.props.clickHandler} className={`square-style square-color-${this.state.value}`}>
            </div>
        )
    }

}


// const Square = (props) => 
// <div onClick={props.clickHandler} className={`square-style square-color-${props.value} ${props.id}`}>
// </div>
export default Square;

