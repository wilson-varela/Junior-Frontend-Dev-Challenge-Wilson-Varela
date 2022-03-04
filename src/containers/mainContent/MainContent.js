import React, { Component } from 'react';
import Auxiliar from '../auxiliar/Auxiliar';
import Card from '../../components/ui/cards/Card';
import classes from './MainContent.module.scss';
import Button from '../../components/ui/button/Button';
import { FaPlusSquare } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaExpandAlt} from "react-icons/fa";
import Input from '../../components/ui/input/Input';
import ContactImg from '../../assets/images/contact.jpg';
import NewContact from '../newcontact/NewContact';
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
                
                <Card width={classes.ExtraSmallCard} mr={classes.Mr}>
                    <div className={`row ${classes.ContactDetails}`}>
                        <div className="col-3"><img src={ContactImg} alt="profile"/></div>
                        <div className="col-9">
                            <p className={classes.SemMargem}><b>Nome Completo</b></p>
                            <p className={` ${classes.SemMargem}`}>email@gmail.com</p>
                        </div>
                        <div className={`col-12 ${classes.ContactDetailsBody}`}>
                            <p className={` ${classes.SemMargem}`}><span className={classes.Bold}>Empresa:</span> xxxxx</p>
                            <p className={` ${classes.SemMargem}`}><span className={classes.Bold}>website:</span> xxxxx</p>
                            <p className={` ${classes.SemMargem}`}><span className={classes.Bold}>Código Postal:</span> xxxxx</p>
                        </div>
                        <div className="col-12">
                            <span className={classes.LeftBorder}></span>
                            <div className={`${classes.ContactDetailsFooter} ${classes.FloatLeft}`}>8444444444</div>
                            <Button 
                                width={classes.ExtraSmallBtn} 
                                bgColor={classes.GreenBg} 
                                color={classes.WhiteCl}
                                hover={classes.BtnGreen}
                                
                                >
                                    <FaExpandAlt/>
                            </Button>
                        </div>

                    </div>
                </Card>

                <Card  width={classes.MediumCard } >
                    <div className='row'> 
                        
                        <div className={`col-12 `}>
                            <NewContact/>
                        </div>
                    </div>
                </Card>
                    
                   
                
            </Auxiliar>
        )
    }
}
export default MainContent;