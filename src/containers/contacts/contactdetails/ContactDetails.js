import React from 'react';
import Auxiliar from '../../auxiliar/Auxiliar';
import auxclass from '../../mainContent/MainContent.module.scss';
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
const ContactDetails =(props)=>{
    const companyType = props.contact.company.type.split(" ").map(c=>{
        return(<li>{c}</li>)
    })

    
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
                                    clicked={props.close}
                                    >
                                        <GrFormClose/>
                                </Button>
                        </p>    
                        </div>
                        <div className={`col-3 ${classes.AlignCenter}`}><img src={ContactImg} alt="profile"/></div>
                        <div className="col-9">
                            <p className={auxclass.SemMargem}><b>{props.contact.name}</b></p>
                            <p className={` ${auxclass.SemMargem} ${classes.GreyCl}`}>{props.contact.email}</p>
                        </div> 
                        <div className={`col-12 ${auxclass.ContactDetailsBody} ${classes.ContactDetailsBody}`}>
                            <p ><span className={classes.Icon}><FaHome/></span>{props.contact.company.name}</p>
                            <p ><span className={classes.Icon}><FaPhoneAlt/></span>{props.contact.phone}</p>
                            <p ><span className={classes.Icon}><FaRegMap/></span>{`${props.contact.address.street},${props.contact.address.city}`}</p>
                            <p ><span className={classes.Icon}><FaRegFileImage/></span>{props.contact.address.zipCode}</p>
                            <p ><span className={classes.Icon}><FaRegBookmark/></span> <ul className={classes.TypeList}>{companyType}</ul></p>
                        </div>
                        <div className={`col-12 ${classes.ContactDetailsFooter}`}>
            
                            <Button 
                                width={auxclass.ExtraSmallBtn} 
                                bgColor={auxclass.RedBg} 
                                color={auxclass.WhiteCl}
                                hover={auxclass.BtnRed}
                                clicked={props.showDelete}
                                >
                                    <FaTrash/>
                            </Button>
                        </div>
                    </div>

            
        </Auxiliar>
    )

}

export default ContactDetails;
