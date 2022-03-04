import React, { Component } from 'react';
import Auxiliar from '../auxiliar/Auxiliar';
import Card from '../../components/ui/cards/Card';
import classes from './MainContent.module.scss';
import Button from '../../components/ui/button/Button';
import { FaPlusSquare } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import Input from '../../components/ui/input/Input';
import NewContact from '../contacts/newcontact/NewContact';
import ContactDetails from '../contacts/contactdetails/ContactDetails';
import DeleteContact from '../contacts/deletecontact/DeleteContact';
class MainContent extends Component{
    render(){
        return(
            <Auxiliar>
                {/* Card para adicionar novo contacto*/}
                <Card style = {classes.GreenBg} width={classes.SmallCard} mr={classes.Mr} tAlign={classes.TextAlignCenter}>
                    <span className={classes.Icon}><FaPlusSquare/></span>
                    <p className={`${classes.WhiteCl} ${classes.Bold}`}>Adicionar Contacto</p>
                    <Button 
                        width={classes.MediumBtn}
                         bgColor={classes.WhiteBg} 
                         color={classes.GreenCl}
                        hover={classes.BtnGrey}
                        mb={classes.BtnNovomb}
                    
                         
                         >
                             Novo contacto
                    </Button>
                </Card>

                 {/* Card do filtro*/}
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
                            <Input width={classes.SmallInput} inputLabel="Nome" inputType="text"/>
                            <Input width={classes.SmallInput} inputLabel="Categorias" inputType="text"/>
                            <Button 
                                width={classes.SmallBtn}
                                bgColor={classes.GreenBg} 
                                color={classes.WhiteCl}
                                hover={classes.BtnGreen}
                                btnFiltro={classes.BtnFiltro}
                                >
                                    <FaSearch/>
                            </Button>
                        </div>
                    </div>
                </Card>
                <div className={classes.LineSeparator}></div>
                
                

                <Card  width={classes.MediumCard } >
                    <div className='row'> 
                        
                        <div className={`col-12 `}>
                            <NewContact/>
                        </div>
                    </div>
                </Card>

                <ContactDetails/>
                <DeleteContact/>

                
            </Auxiliar>
        )
    }
}
export default MainContent;