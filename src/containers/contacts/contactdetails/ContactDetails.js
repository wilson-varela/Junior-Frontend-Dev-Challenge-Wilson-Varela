import React from 'react';
import Auxiliar from '../../auxiliar/Auxiliar';
import auxclass from '../../mainContent/MainContent.module.scss';
import Card from '../../../components/ui/cards/Card';
import ContactImg from '../../../assets/images/contact.jpg';
import classes from './ContactDetails.module.scss';
import Button from '../../../components/ui/button/Button';
import {FaTrash} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaRegMap} from 'react-icons/fa';
import {FaRegFileImage} from 'react-icons/fa';
import {FaRegBookmark} from 'react-icons/fa';
import {GrFormClose} from 'react-icons/gr';
const ContactDetails =({contact, close})=>{
    return(

        <Auxiliar>
            
                    <div className={`row ${classes.ContactDetails}`}> 
                        <div className={`col-12`}>
                            <p className={auxclass.TextAlignRight}>
                                <Button 
                                    width={auxclass.CloseModalBtn} 
                                    bgColor={auxclass.GreenBg} 
                                    color={auxclass.WhiteCl}
                                    hover={auxclass.BtnGreen}
                                    clicked={close}
                                    >
                                        <GrFormClose/>
                                </Button>
                        </p>    
                        </div>
                        <div className={`col-3 ${classes.AlignCenter}`}><img src={ContactImg} alt="profile"/></div>
                        <div className="col-9">
                            <p className={auxclass.SemMargem}><b>{contact.name}</b></p>
                            <p className={` ${auxclass.SemMargem} ${classes.GreyCl}`}>email@gmail.com</p>
                        </div> 
                        <div className={`col-12 ${auxclass.ContactDetailsBody} ${classes.ContactDetailsBody}`}>
                            <p ><span className={classes.Icon}><FaHome/></span>xxxxx</p>
                            <p ><span className={classes.Icon}><FaPhoneAlt/></span>xxxxx</p>
                            <p ><span className={classes.Icon}><FaRegMap/></span>xxxxx</p>
                            <p ><span className={classes.Icon}><FaRegFileImage/></span>xxxxx</p>
                            <p ><span className={classes.Icon}><FaRegBookmark/></span>xxxxx</p>
                        </div>
                        <div className={`col-12 ${classes.ContactDetailsFooter}`}>
            
                            <Button 
                                width={auxclass.ExtraSmallBtn} 
                                bgColor={auxclass.RedBg} 
                                color={auxclass.WhiteCl}
                                hover={auxclass.BtnRed}
                                
                                >
                                    <FaTrash/>
                            </Button>
                        </div>
                    </div>

            
        </Auxiliar>
    )

}

export default ContactDetails;
