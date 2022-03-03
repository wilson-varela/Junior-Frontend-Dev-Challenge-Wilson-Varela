import React from 'react';
import  classes from './Button.module.scss';

const Button =(props)=>{
    const classArray = [];
    if(props.width){
        classArray.push(props.width)
    }
    if(props.bgColor){
        classArray.push(props.bgColor)
    }
    if(props.color){
        classArray.push(props.color)
    }

    if(props.hover){
        classArray.push(props.hover)
    }

    if(props.btnFiltro){
        classArray.push(props.btnFiltro)
    }
    if(props.mb){
        classArray.push(props.mb)
    }
    
    return(
        <button className={`${classes.Btn} ${classArray.join(' ')}`}>
            {props.children}
        </button>
    );

}
export default Button;