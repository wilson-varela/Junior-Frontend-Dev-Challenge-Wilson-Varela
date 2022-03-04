import React from 'react';
import Card from '../../../components/ui/cards/Card';
import auxclass from '../../mainContent/MainContent.module.css';
import {FaExpandAlt} from "react-icons/fa";
import ContactImg from '../../../assets/images/contact.jpg';
const Contact = (props) =>{
    return(
        <Card width={auxclass.ExtraSmallCard} mr={auxclass.Mr}>
                    <div className={`row ${auxclass.ContactDetails}`}>
                        <div className="col-3"><img src={ContactImg} alt="profile"/></div>
                        <div className="col-9">
                            <p className={auxclass.SemMargem}><b>Nome Completo</b></p>
                            <p className={` ${auxclass.SemMargem}`}>email@gmail.com</p>
                        </div>
                        <div className={`col-12 ${auxclass.ContactDetailsBody}`}>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>Empresa:</span> xxxxx</p>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>website:</span> xxxxx</p>
                            <p className={` ${auxclass.SemMargem}`}><span className={auxclass.Bold}>Código Postal:</span> xxxxx</p>
                        </div>
                        <div className="col-12">
                            <span className={auxclass.LeftBorder}></span>
                            <div className={`${auxclass.ContactDetailsFooter} ${auxclass.FloatLeft}`}>8444444444</div>
                            <Button 
                                width={auxclass.ExtraSmallBtn} 
                                bgColor={auxclass.GreenBg} 
                                color={auxclass.WhiteCl}
                                hover={auxclass.BtnGreen}
                                
                                >
                                    <FaExpandAlt/>
                            </Button>
                        </div>

                    </div>
                </Card>
    )

}

export default Contact;