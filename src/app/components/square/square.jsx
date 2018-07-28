import React from 'react';
import './square.scss';



// const Square = (props) => 
// <div onClick={props.clickHandler} className={`square-style ${props.colorValue}`}  >
//     <h5>{props.value}</h5>
// </div>


class Square extends React.Component {
    constructor(props){
        super(props)
        console.log('Sq', this.props);
    }

    setColorByValue = (i) =>{
        if (i === 0) return 'blue'
        if (i === 1) return 'red'
        if (i === 2) return 'green'
        if (i === 3) return 'yellow'

    }

    render(){
        return(
        <div onClick={this.props.clickHandler} className={`square-style ${this.setColorByValue(this.props.value)}`}  >
            {/* <h5>{this.props.value}</h5> */}
        </div>
        )
    }


}

export default Square;
