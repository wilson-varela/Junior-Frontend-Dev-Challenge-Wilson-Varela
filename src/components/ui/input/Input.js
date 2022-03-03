import React from 'react';
import classes from './Input.module.scss';
const Input = (props) =>{
    return(
        <div className={classes.InputDiv}>
            <label>{props.inputLabel}</label>
            <input type={props.inputType} />

        </div>
    )
}

export default Input;