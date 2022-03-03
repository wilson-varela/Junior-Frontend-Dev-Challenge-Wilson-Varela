import React from 'react';
import auxclass from '../../containers/mainContent/MainContent.module.scss';
import classes from './Banner.module.scss';
import personImage from '../../assets/images/right-sidebar.png';
const Banner =()=>{
    return (
        <div className='card' >
            <div className={auxclass.LargeCard}>
                <h3 className={classes.Titulo}>Cuidamos do seu<span className={auxclass.GreenCl}> <br/> Negocio </span></h3>
                <p className={`${auxclass.SimpleText}`}>Uma plataforma especializada na prospecção de novos clientes para o seu negócio.</p>
            </div>
            
            <img src = {personImage} alt="young-man"/>
        </div>
    )   
}

export default Banner;