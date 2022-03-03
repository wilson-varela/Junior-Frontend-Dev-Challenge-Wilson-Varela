import React from 'react';


const Card = (props) =>{
    return(
        <div className={`card pt-3 pb-3 ${props.width} ${props.style} ${props.ml} ${props.mr} ${props.tAlign}`} >
            {props.children}
        </div>
    );
}
export default Card;