import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';


//Trying Hooks


const Square = (props) => {

    // const squareClickValue = React.useContext(AppContext.squareClick);

    React.useLayoutEffect(()=>{
      console.log('See The Log')

    },[])

    return(
      <h1>{props.id}</h1>
      )

    // console.log('See The Log', squareClickValue)


//         return(
//             // <div onClick={squareClickValue.bind(this, this.props.id)}
//           <div
//             className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
// // {props.id}
//             </div>
//         )
}




// class Square extends React.Component{
//   state: { value: any; animateClass: string; };
//   props: any;
//     constructor(props: any){
//         super(props);
//         this.state= {
//             value: this.props.value,
//             animateClass: 'initial'
//         }
//     }
//
//     static getDerivedStateFromProps(nextProps: { value: any; }, _prevState: any){
//             if (nextProps.value === null) {
//                 return {animateClass: 'destroy'}
//             }
//
//             if (nextProps.value != null) {
//                 return {value: nextProps.value, animateClass: 'drop'}
//             }
//         else return null;
//     }
//
//
//
//     render(){
//         return(
//           <AppContext.Consumer>
//             {(context) => (
//                     <div onClick={context.squareClick.bind(this, this.props.id)}
//                     className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
//                     </div>
//             )}
//         </AppContext.Consumer>
//
//
//         )
//     }
//
// }



export default Square;
