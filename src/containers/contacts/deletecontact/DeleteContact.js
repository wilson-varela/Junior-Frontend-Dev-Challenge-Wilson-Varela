import React from 'react';
import Auxiliar from '../../auxiliar/Auxiliar';
import Button from '../../../components/ui/button/Button';
import auxclass from '../../mainContent/MainContent.module.scss';

import {FaRegWindowClose} from 'react-icons/fa';
import classes from './DeleteCard.module.scss';

const DeleteContact =(props)=>{
    return(
        <Auxiliar>
        
                    <div className={`row ${classes.DeleteCard}`}> 
                        
                        <div className={`col-12`}>
                            <p className={auxclass.RedCl}><FaRegWindowClose/></p>
                            <p className={auxclass.Bold}>Apagar Contacto</p>
                            <p className={auxclass.GreyCl}> Tem certeza que você deseja apagar o contacto?</p>
                        </div>
                        <div className={`col-12`}>
                            <Button 
                                width={auxclass.SmallBtn} 
                                bgColor={auxclass.GreyBg} 
                                color={auxclass.BlackCl}
                                hover={auxclass.BtnGrey}
                                clicked={props.close}
    
                                >
                                    Cancelar
                            </Button>
                            <Button 
                                width={auxclass.SmallBtn} 
                                bgColor={auxclass.RedBg} 
                                color={auxclass.WhiteCl}
                                hover={auxclass.BtnRed}
                                id={props.id}
                                clicked={props.clicked}
                                >
                                    Sim, apagar
                            </Button>
                        </div>
                    </div>

           
        </Auxiliar>
    )
};
export default DeleteContact;