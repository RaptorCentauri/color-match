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
        if(nextProps.value != prevState.value){
            if (nextProps.value === null) {
                console.log('THERE IS A NULL', nextProps.id);
                return {animateClass: 'destroy'}
            }

            if (nextProps.value != null) {
                console.log('Null has been filled', nextProps.id);

                return {value: nextProps.value, animateClass: 'drop'}
            }
        }
        else return null;
    }


    // componentDidUpdate = (prevProps) =>{
    //     console.log('prev', prevProps.value);
    //     console.log('this', this.props.value);
        
        
    //     // if(this.props.value != prevProps.value){
    //     //     this.setState({value: this.props.value})
    //     //     console.log('prev', prevProps.value);
            
    //     //     console.log('now', this.props.value);
    //     //     // console.log('something is working');
    //     // }
    // }



    render(){
        return(
            <div onClick={this.props.clickHandler} className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
            {this.state.animateClass}
            </div>
        )
    }

}


// const Square = (props) => 
// <div onClick={props.clickHandler} className={`square-style square-color-${props.value} ${props.id}`}>
// </div>
export default Square;

