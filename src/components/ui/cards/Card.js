import React from 'react';


const Card = (props) =>{

    const classArray = [];
    if(props.width){
        classArray.push(props.width)
    }
    if(props.style){
        classArray.push(props.style)
    }
    if(props.ml){
        classArray.push(props.ml)
    }

    if(props.mr){
        classArray.push(props.mr)
    }
    if(props.tAlign){
        classArray.push(props.tAlign)
    }

    return(
        <div className={`card pt-3 pb-3 ${classArray.join(' ')}`} >
            {props.children}
        </div>
    );
}
export default Card;