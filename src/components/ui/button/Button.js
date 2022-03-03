import React from 'react';
import  classes from './Button.module.scss';

const Button =(props)=>{
    return(
        <button className={`${classes.Btn} ${props.width} ${props.bgColor} ${props.color} ${props.hover}`}>
            {props.children}
        </button>
    );

}
export default Button;