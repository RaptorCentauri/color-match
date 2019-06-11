import * as React from 'react';
import "./Square.scss";
import { AppContext } from '../../contextAndProvider';

class Square extends React.Component{
  state: { value: any; animateClass: string; };
  props: any;
    constructor(props: any){
        super(props);
        this.state= {
            value: this.props.value,
            animateClass: 'initial'
        }
    }

    static getDerivedStateFromProps(nextProps: { value: any; }, _prevState: any){
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
          <AppContext.Consumer>
            {(context) => (
                    <div onClick={context.squareClick.bind(this, this.props.id)}
                    className={` id-${this.props.id} square-style square-color-${this.state.value} square-animate-${this.state.animateClass}`}>
                    </div>
            )}
        </AppContext.Consumer>


        )
    }

}



export default Square;
