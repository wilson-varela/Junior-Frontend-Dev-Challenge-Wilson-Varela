import React from 'react';
import Auxiliar from '../../../containers/auxiliar/Auxiliar';
import classes from './Modal.module.scss';

const Modal = (props) =>{
    
    return(
        <Auxiliar>
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