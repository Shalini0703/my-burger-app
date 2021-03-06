import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../BackDrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    render(){
        return (
            <Aux>
                <Backdrop show = {this.props.show} clicked = {this.props.dispose}/>
                <div className = {classes.Modal}
                    style = {{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                             opacity : this.props.show ? '1' : '0'
                     }}
                >
                {this.props.children}
            </div>
            </Aux>
        )
    }  
}

export default Modal;