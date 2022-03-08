import React from 'react';
import classes from './Input.module.scss';
const Input = (props) =>{
    return(
        <div className={`${classes.InputDiv} ${props.width}`}>
            <label>{props.inputLabel}</label>
            <span className={classes.LeftBorder}></span>
            <input type={props.inputType} name={props.inputName} value={props.inputValue} onChange={props.change}/>

        </div>
    )
}

export default Input;