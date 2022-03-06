import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import Auxiliar from '../../../containers/auxiliar/Auxiliar';
import classes from './Modal.module.scss';
const Modal = (props) =>{
    
    return(
        <Auxiliar>
            <Backdrop show={props.show} clicked={props.close} />
            <div className={classes.Modal}
                style={{
                    display: props.show ? 'block' : 'none'
                }}
            >
                    {props.children}
            </div>
        </Auxiliar>
    )
    
}
export default Modal;