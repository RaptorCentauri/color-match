import React from 'react';
import './square.scss';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: this.props.value,
            animateClass: 'initial'
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
            console.log(`EVAL ${nextProps.id}`);
            if (nextProps.value === null) {
                console.log(`Setting ${nextProps.id} to destory`);
                console.log('===============================================');
                
                return {animateClass: 'destroy'}
            }

            if (nextProps.value != null) {
                console.log(`Setting ${nextProps.id} to drop`);
                console.log('===============================================');

                return {value: nextProps.value, animateClass: 'drop'}
            }
        else return null;
    }




    render(){
        return(
            <div onClick={this.props.clickHandler} className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
            </div>
        )
    }

}


// const Square = (props) => 
// <div onClick={props.clickHandler} className={`square-style square-color-${props.value} ${props.id}`}>
// </div>
export default Square;

