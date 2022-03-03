import React, { Component } from 'react';
import Auxiliar from '../auxiliar/Auxiliar';
import Card from '../../components/ui/cards/Card';
import classes from './MainContent.module.scss';
import Button from '../../components/ui/button/Button';
import { FaPlusSquare } from "react-icons/fa";
import Input from '../../components/ui/input/Input';

class MainContent extends Component{
    render(){
        return(
            <Auxiliar>
                <Card style = {classes.GreenBg} width={classes.SmallCard} mr={classes.Mr} tAlign={classes.TextAlignCenter}>
                    <span className={classes.Icon}><FaPlusSquare/></span>
                    <p className={`${classes.WhiteCl} ${classes.Bold}`}>Adicionar Contacto</p>
                    <Button 
                        width={classes.SmallBtn}
                         bgColor={classes.WhiteBg} 
                         color={classes.GreenCl}
                        hover={classes.BtnGrey}
                    
                         
                         >
                             Novo contacto
                    </Button>
                </Card>
                <Card  width={classes.MediumCard } >
                    <div className='row'> 
                        <div className={`col-2 ${classes.TextAlignCenter}`}>
                            <span className={classes.NrContactos}>45</span>
                        </div>
                        <div className='col-10'>
                            <p className={`${classes.Titulo} ${classes.Bold}`}>Contactos <span className={classes.GreenCl}>Adicionados</span></p>
                            <p className={`${classes.SimpleText}`}>Uma plataforma especializada na prospecção de novos clientes para o seu negócio.</p>
                        </div>
                        <div className={`col-12 ${classes.FiltroDiv}`}>
                            <p className={classes.Separador}></p>
                            <Input inputLabel="Nome" inputType="text"/>

                        </div>
                    </div>
                </Card>
            </Auxiliar>
        )
    }
}
export default MainContent;