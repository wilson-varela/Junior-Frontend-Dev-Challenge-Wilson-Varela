import React, {Component} from 'react';
import Auxiliar from '../../auxiliar/Auxiliar';
import Form from '../../../components/form/Form';
import Input from '../../../components/ui/input/Input';
import auxclass from '../../mainContent/MainContent.module.scss';
import Button from '../../../components/ui/button/Button';
import { FaPlus} from "react-icons/fa";
import classes from './NewContact.module.scss';
import {GrFormClose} from 'react-icons/gr';

class NewContact extends Component{
    render(){
        return(
            <Auxiliar>
                <p className={auxclass.TextAlignRight}><Button 
                        width={auxclass.CloseModalBtn} 
                        bgColor={auxclass.GreenBg} 
                        color={auxclass.WhiteCl}
                        hover={auxclass.BtnGreen}
                        clicked={this.props.close}
                        >
                            <GrFormClose/>
                    </Button></p>
                <h2 className={classes.Titulo}><span className={classes.Icon}><FaPlus/></span> Novo Contacto</h2>
                <Form  className={classes.FormContact}>
                    <Input inputLabel="Nome" inputName="name" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.name} change={this.props.change}/>
                    <Input inputLabel="Email" inputName="email" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.email} change={this.props.change}/>
                    <Input inputLabel="Telefone" inputName="phone" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.phone} change={this.props.change}/>
                    <Input inputLabel="Website" inputName="website" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.website} change={this.props.change}/>
                    <Input inputLabel="Nome da empresa" inputName="company_name" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.company_name} change={this.props.change}/>
                    <Input inputLabel="Categorias" inputName="category" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.category} change={this.props.change}/>
                    <Input inputLabel="Rua" inputName="street" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.street} change={this.props.change}/>
                    <Input inputLabel="Cidade" inputName="city" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.city} change={this.props.change}/>
                    <Input inputLabel="Código Postal" inputName="zip_code" inputType="text" width={auxclass.MediumInput} inputValue={this.props.contact.zip_code} change={this.props.change}/>
                    <div className={classes.StoreButtonRow}>
                        <Button 
                            width={auxclass.SmallBtn}
                            bgColor={auxclass.GreenBg} 
                            color={auxclass.WhiteCl}
                            hover={auxclass.BtnGreen}
                            clicked={this.props.submit}
                        >
                            Gravar Contacto
                        </Button>
                    </div>
                    
                </Form>

            </Auxiliar>
        );
    }

}
export default NewContact;