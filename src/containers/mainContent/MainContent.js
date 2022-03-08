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
import Backdrop from '../../components/ui/backdrop/Backdrop';
import ContactDetails from '../contacts/contactdetails/ContactDetails';
import DeleteContact from '../contacts/deletecontact/DeleteContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MainContent extends Component{
  
    state = {
        contacts:[],
        newContactModalOpen:false,
        contactDetailsModalOpen:false,
        deleteModalOpen:false,
        showBackdrop:false,
        singleContact:[],
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

    componentDidMount(){
        this.getContacts()
  
    }

     getContacts =()=>{
        axios.get('/api/v1/contacts')
            .then(response=>{
                this.setState({ contacts:response.data})
                
            })
     }

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

        
        const newContact = JSON.stringify({
            name:this.state.contact.name,
            email:this.state.contact.email,
            phone:this.state.contact.phone,
            website:this.state.contact.website,
            addressStreet:this.state.contact.street,
            addressCity:this.state.contact.city,
            addressZipCode:this.state.contact.zip_code,
            companyName:this.state.contact.company_name,
            companyType:this.state.contact.category

        })
        
        const header = { headers:{
            'content-type':'application/json',
        }}
        
        axios.post('/api/v1/contacts', newContact, header).then(response=>{
            if(response.status===200){
                this.setState({contact:{
                    name:"", email:"", phone:"", website:"", company_name:"", category:"", street:"", city:"", zip_code:""
                    },
                    newContactModalOpen:false,
                    showBackdrop:false
                })
                toast.success('Gravado com sucesso.')
                this.getContacts()
               
            }
           
        }).catch(error=>{
            if(error){
               toast.warn('Erro ao gravar.') 
                console.log(error.response.data)
            }
            
        })
        
        

    }

    openNewContactModalHandler = ()=>{
    
        this.setState({newContactModalOpen:true,showBackdrop:true})
    }
    
    closeNewContactModalHandler =()=>{
        this.setState({newContactModalOpen:false,showBackdrop:false})
    }

    openContactDetailsModalHandler =(event)=>{
        event.preventDefault();

        const header = { headers:{
            'content-type':'application/json',
        }}
        axios.get(`/api/v1/contacts/${event.currentTarget.id}`, header).then(response=>{
            this.setState({singleContact:response.data, contactDetailsModalOpen:true,showBackdrop:true})
            
        }).catch(error=>{
            console.log(error.response.data)
        })

    }

    closeContactDetailsModalHandler =()=>{
        this.setState({contactDetailsModalOpen:false,showBackdrop:false})
    }
    
    deleteContact = (event) =>{
         
        const header = { headers:{
            'content-type':'application/json',
        }}
        
        axios.delete(`/api/v1/contacts/${event.currentTarget.id}`,header).then(response=>{
            if(response.status===204){
                this.setState({deleteModalOpen:false, showBackdrop:false})
                toast.success('Removido com sucesso.')
                this.getContacts()
            }
            
        }).catch(error=>{
            if(error){
                toast.success('Erro ao apagar.')
                console.log(error.response.data)
            }
            
        }) 
        
    }

    openDeleteModalHandler = (event)=>{
    
        this.setState({contactDetailsModalOpen:false, deleteModalOpen:true })
        
    }
    
    closeDeleteModalHandler =()=>{
        this.setState({deleteModalOpen:false,showBackdrop:false})
    }


    render(){
        return(
            <Auxiliar>
                
                <Backdrop show={this.state.showBackdrop} />
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
                        <div className={`col-12 `}>
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
                {this.state.contactDetailsModalOpen && <Modal show={this.state.contactDetailsModalOpen} >
                       <ContactDetails  showDelete={this.openDeleteModalHandler} contact={this.state.singleContact} close={this.closeContactDetailsModalHandler}/> 
                </Modal> }
                
                {this.state.deleteModalOpen && <Modal show={this.state.deleteModalOpen}>
                    <DeleteContact clicked={this.deleteContact} id={this.state.singleContact.id} delete = {this.openDeleteModalHandler} close={this.closeDeleteModalHandler}/></Modal>}
                    <ToastContainer 
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}/>

            </Auxiliar>
        )
    }
}
export default MainContent;