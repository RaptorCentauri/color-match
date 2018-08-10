import React from 'react';
import './square.scss';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: this.props.value,
            animateClass: this.props.animateClass
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.value != prevState.value){
            return {animateClass: nextProps.animateClass}
        }
        else return null;
    }

    componentDidUpdate = (prevProps) =>{

        if(this.props.value != prevProps.value){
            this.setState({value: this.props.value})
            console.log('something is working');
        }
    }



    render(){
        return(
            <div onClick={this.props.clickHandler} className={`square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
            </div>
        )
    }

}


// const Square = (props) => 
// <div onClick={props.clickHandler} className={`square-style square-color-${props.value} ${props.id}`}>
// </div>
export default Square;

