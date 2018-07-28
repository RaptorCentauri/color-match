import React from 'react';
import './square.scss';



const Square = (props) => 
<div onClick={props.clickHandler} className={`square-style square-color-${props.value}`}  >
</div>


// class Square extends React.Component {
//     constructor(props){
//         super(props)
//         console.log('Sq', this.props.value);
//     }

//     setColorByValue = (i) =>{
//         if (i === 0) return 'blue'
//         if (i === 1) return 'red'
//         if (i === 2) return 'green'
//         if (i === 3) return 'yellow'

//     }

//     render(){
//         return(
//     <div onClick={this.props.clickHandler} className={`square-style ${this.setColorByValue(this.props.value)}`}  >


//         </div>
//         )
//     }


// }

export default Square;

