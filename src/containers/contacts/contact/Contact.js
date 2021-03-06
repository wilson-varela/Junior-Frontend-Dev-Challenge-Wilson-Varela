import React from 'react';
import Card from '../../../components/ui/cards/Card';
import auxclass from '../../mainContent/MainContent.module.scss';
import {FaExpandAlt} from "react-icons/fa";
import ContactImg from '../../../assets/images/contact.jpg';
import Button from '../../../components/ui/button/Button';
const Contact = (props) =>{
    return(
        <Card width={auxclass.ContactsCard} mr={auxclass.ContactsCardMargin}>
                    <div className={`row ${auxclass.ContactDetails}`}>
                        <div className={`col-md-3 col-sm-2 ${auxclass.TextAlignRight} ${auxclass.ProfileImage}`}><img src={ContactImg} alt="profile"/></div>
                        <div className={`col-md-9 col-sm-10 ${auxclass.ProfileName}`}>
                            <p className={auxclass.SemMargem}><b>{props.name}</b></p>
                            <p className={` ${auxclass.SemMargem} ${auxclass.GreyCl}`}>{props.email}</p>
                        </div>
                        <div className={`col-12 ${auxclass.ContactDetailsBody}`}>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>Empresa:</span> {props.empresa}</p>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>website:</span> {props.website}</p>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>Código Postal:</span> {props.zip}</p>
                        </div>
                        <div className="col-12">
                            <span className={auxclass.LeftBorder}></span>
                            <div className={`${auxclass.ContactDetailsFooter} ${auxclass.FloatLeft}`}>{props.phone}</div>
                            <Button 
                                width={auxclass.ExtraSmallBtn} 
                                bgColor={auxclass.GreenBg} 
                                color={auxclass.WhiteCl}
                                hover={auxclass.BtnGreen}
                                clicked={props.clicked}
                                id={props.id}
                                
                                >
                                    <FaExpandAlt/>
                            </Button>
                        </div>

                    </div>

                </Card>
    )

}

export default Contact;