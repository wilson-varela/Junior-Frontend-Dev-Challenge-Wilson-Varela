import React from 'react';
import classes from './Input.module.scss';
const Input = (props) =>{
    return(
        <div className={`${classes.InputDiv} ${props.width}`}>
            <label>{props.inputLabel}</label>
            <span className={classes.LeftBorder}></span>
            <input type={props.inputType} />

        </div>
    )
}

export default Input;