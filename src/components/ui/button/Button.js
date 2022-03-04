import React from 'react';
import  classes from './Button.module.scss';

const Button =(props)=>{
    const classArray = [];
    const btnType="";

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
    
    if(props.type){
        btnType=props.type
    }

    return(
        <button className={`${classes.Btn} ${classArray.join(' ')}`} type={btnType}>
            {props.children}
        </button>
    );

}
export default Button;