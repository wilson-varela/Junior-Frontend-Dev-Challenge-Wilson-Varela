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
import validator from 'validator';

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
        },
        search:{
            name:"",
            category:""
        }
    }

    componentDidMount(){
        this.getContacts()
  
    }

     /* pega os contactos da api */
     getContacts =()=>{
        axios.get('/api/v1/contacts')
            .then(response=>{
                this.setState({ contacts:response.data})
                
            })
     }

     /* pega valores dos inputs do formulario novo contacto*/
    formOnChangeHandler=(event)=>{
        
        const name = event.target.name;
        const value = event.target.value;

        this.setState({contact:{
            ...this.state.contact,
            [name]: value
        }})
    }
    /* Envia o novo contacto ao servidor*/
    formSubmitHandler =(event)=>{
        event.preventDefault();

        if(!validator.isEmail(this.state.contact.email)){
            toast.warn("Email inv??lido.")
        }else{
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
                    
                }
                
            })
     }
        

    }

    
    openNewContactModalHandler = ()=>{
    
        this.setState({newContactModalOpen:true,showBackdrop:true})
    }
    
    closeNewContactModalHandler =()=>{
        this.setState({
            newContactModalOpen:false,
            showBackdrop:false,
            contact:{
                name:"", email:"", phone:"", website:"", company_name:"", category:"", street:"", city:"", zip_code:""
            }
        })
    }

    openContactDetailsModalHandler =(event)=>{
        event.preventDefault();

        const header = { headers:{
            'content-type':'application/json',
        }}
        axios.get(`/api/v1/contacts/${event.currentTarget.id}`, header).then(response=>{
            this.setState({singleContact:response.data, contactDetailsModalOpen:true,showBackdrop:true})
            
        }).catch(error=>{
            if(error){toast.warn("Erro ao carregar contacto.")}
           
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
                
            }
            
        }) 
        
    }

    openDeleteModalHandler = (event)=>{
    
        this.setState({contactDetailsModalOpen:false, deleteModalOpen:true })
        
    }
    
    closeDeleteModalHandler =()=>{
        this.setState({deleteModalOpen:false,showBackdrop:false})
    }

    searchOnChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({search:{
            ...this.state.search,
            [name]: value
        }})
    }
    searchSubmitHandler = ()=>{
        
        

        if(!this.state.search.name.trim()===""){
            const name = JSON.stringify({name:this.state.search.name})

            axios.get(`/api/v1/contacts/`, name).then(response=>{
                if(response.status===200){
                    this.setState({contacts:response.data})
                }
            }).catch(error=>{
                if(error){
                    toast.warn("Erro na pesquisa.")
                }
            })
        }

        if(!this.state.search.category.trim()===""){
            const category= JSON.stringify({companyType:this.state.search.category})
            axios.get(`/api/v1/contacts/`, category).then(response=>{
                if(response.status===200){
                    this.setState({contacts:response.data})
                }
            }).catch(error=>{
                if(error){
                    toast.warn("Erro na pesquisa.")
                }
            })
        }

        if(!this.state.search.name.trim()==="" && !this.state.search.category.trim()===""){
            const data=JSON.stringify({
                name:this.state.search.name,
                companyType:this.state.search.category
            })
            axios.get(`/api/v1/contacts/`, data).then(response=>{
                this.setState({contacts:response.data})
            }).catch(error=>{
                if(error){
                    toast.warn("Erro na pesquisa.")
                }
            })
        }


        
    }

    render(){
        return(
            <Auxiliar>
                
                <Backdrop show={this.state.showBackdrop} />
                {/* Card para adicionar novo contacto*/}
                <Card style = {classes.GreenBg} width={classes.SmallCard} mr={classes.Mr} tAlign={classes.TextAlignCenter}>
                    <div className={classes.AddContact}>
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
                    </div>
                </Card>

                 {/* Card do filtro*/}
                <Card  width={classes.MediumCard } >
                    <div className='row'> 
                        <div className={`col-2 ${classes.TextAlignCenter} ${classes.NrContactos}`}>
                            {this.state.contacts.length}
                        </div>
                        <div className='col-10'>
                            <p className={`${classes.Titulo} ${classes.Bold}`}>Contactos <span className={classes.GreenCl}>Adicionados</span></p>
                            <p className={`${classes.SimpleText}`}>Uma plataforma especializada na prospec????o de novos clientes para o seu neg??cio.</p>
                        </div>
                        <div className={`col-12 `}>
                            <p className={classes.Separador}></p>
                            <Input width={classes.SmallInput} inputLabel="Nome" inputName="name" inputType="text" inputValue={this.state.search.name} change={this.searchOnChangeHandler} />
                            <Input width={classes.SmallInput} inputLabel="Categorias" inputName="category" inputType="text" inputValue={this.state.search.category} change={this.searchOnChangeHandler}/>
                            <Button 
                                width={classes.SmallBtn}
                                bgColor={classes.GreenBg} 
                                color={classes.WhiteCl}
                                hover={classes.BtnGreen}
                                btnFiltro={classes.BtnFiltro}
                                clicked={this.searchSubmitHandler}
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

                
                <Modal show={this.state.newContactModalOpen} close={this.closeNewContactModalHandler}> 
                    <NewContact contact={this.state.contact} change={this.formOnChangeHandler} submit={this.formSubmitHandler} close={this.closeNewContactModalHandler} />
                </Modal>
                {this.state.contactDetailsModalOpen && <Modal show={this.state.contactDetailsModalOpen} >
                       <ContactDetails  showDelete={this.openDeleteModalHandler} contact={this.state.singleContact} close={this.closeContactDetailsModalHandler}/> 
                </Modal> }
                
                {/*Mostrar o delete modal se o valor for true */}
                {this.state.deleteModalOpen && <Modal show={this.state.deleteModalOpen}>
                    <DeleteContact clicked={this.deleteContact} id={this.state.singleContact.id} delete = {this.openDeleteModalHandler} close={this.closeDeleteModalHandler}/>
                </Modal>}

                {/*Component de notificacoes */}
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