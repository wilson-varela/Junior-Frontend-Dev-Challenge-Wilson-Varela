import React, { Component } from 'react';
import Auxiliar from '../auxiliar/Auxiliar';
import Card from '../../components/ui/cards/Card';
import classes from './MainContent.module.scss';
import Button from '../../components/ui/button/Button';
import { FaPlusSquare } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import Input from '../../components/ui/input/Input';
import axios from 'axios';
import Contacts from '../contacts/Contacts';
import Modal from '../../components/ui/modal/Modal';
import NewContact from '../contacts/newcontact/NewContact';
import ContactDetails from '../contacts/contactdetails/ContactDetails';

class MainContent extends Component{
    
    state = {
        contacts:[{"id":1,"name":"Leanne Graham","email":"Sincere@april.biz",
        "phone":"1-770-736-8031 x56442","website":"hildegard.org",
        "company":{"name":"Romaguera-Crona","type":"harness real-time e-market"},
        "address":{"street":"Kulas Light","city":"Gwenborough","zipCode":"92998-3874"}},
        {"id":2,"name":"Pedro Borges","email":"Sincere@april.biz",
        "phone":"1-770-736-8031 x56442","website":"hildegard.org",
        "company":{"name":"Romaguera-Crona","type":"harness real-time e-market"},
        "address":{"street":"Kulas Light","city":"Gwenborough","zipCode":"92998-3874"}}
    ],
        newContactModalOpen:false,
        contactDetailsModalOpen:false,
        deleteModalOpen:false,
        contact:{
        name:"",
        email:"",
        phone:"",
        website:"",
        company_name:"",
        category:"",
        street:"",
        city:"",
        zip_code:""
        }
    }

    /* componentDidMount(){
        axios.get('https://34100289-review-master-8dyme2.preview.eks.technoplus.link/api/v1/contacts')
            .then(response=>{
                this.setState({ contacts:response.data})
                console.log(response.data)
            })

    } */

    formOnChangeHandler=(event)=>{
        console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.value;

        this.setState({contact:{
            ...this.state.contact,
            [name]: value
        }})
    }
    formSubmitHandler =(event)=>{
        event.preventDefault();

        const contacts = [...this.state.contacts]
        const newContact ={
            id:3,
            name:this.state.contact.name,
            email:this.state.contact.email,
            phone:this.state.contact.phone,
            website:this.state.contact.website,
            company:{name:this.state.contact.company_name, type:this.state.contact.category},
            address:{street:this.state.contact.street, city:this.state.contact.city, zipCode:this.state.contact.zip_code},

        } 
        contacts.push(newContact)
        this.setState({contacts:contacts})
        alert("Submeteu")
        

    }

    openNewContactModalHandler = ()=>{
    
        this.setState({newContactModalOpen:true})
    }
    
    closeNewContactModalHandler =()=>{
        this.setState({newContactModalOpen:false})
    }

    openContactDetailsModalHandler =()=>{
        
        this.setState({contactDetailsModalOpen:true})
    }
    closeContactDetailsModalHandler =()=>{
        this.setState({contactDetailsModalOpen:false})
    }
    getContactDetails = (id)=>{
        const index =this.state.contacts.findIndex(c=>{
            return c.id===id;
        })
        const contact = this.state.contacts[index]
        this.setState({singleContact:contact})
        console.log(this.state.singleContact)
    }


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
                        clicked={this.openNewContactModalHandler}
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

                {/* Lista de contactos*/}
                <Contacts 
                    clicked={this.openContactDetailsModalHandler} 
                    contacts={this.state.contacts} 
                    close={this.closeContactDetailsModalHandler} 
                    show={this.state.contactDetailsModalOpen} />

                {/*Modals */}
                <Modal show={this.state.newContactModalOpen} close={this.closeNewContactModalHandler}> 
                    <NewContact contact={this.state.contact} change={this.formOnChangeHandler} submit={this.formSubmitHandler} close={this.closeNewContactModalHandler} />
                </Modal>
                
        
            </Auxiliar>
        )
    }
}
export default MainContent;