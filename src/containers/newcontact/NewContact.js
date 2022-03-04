import React, {Component} from 'react';
import Auxiliar from '../auxiliar/Auxiliar';
import Form from '../../components/form/Form';
import Input from '../../components/ui/input/Input';
import auxclass from '../mainContent/MainContent.module.scss';
import Button from '../../components/ui/button/Button';
import { FaPlus} from "react-icons/fa";
import classes from './NewContact.module.scss';
class NewContact extends Component{
    render(){
        return(
            <Auxiliar>
                <h2 className={classes.Titulo}><span className={classes.Icon}><FaPlus/></span> Novo Contacto</h2>
                <Form>
                    <Input inputLabel="Nome" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Email" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Telefone" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Website" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Nome da empresa" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Categorias" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Rua" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Cidade" inputType="text" width={auxclass.MediumInput}/>
                    <Input inputLabel="Código Postal" inputType="number" width={auxclass.MediumInput}/>
                    <div className={classes.StoreButtonRow}>
                        <Button 
                            width={auxclass.SmallBtn}
                            bgColor={auxclass.GreenBg} 
                            color={auxclass.WhiteCl}
                            hover={auxclass.BtnGreen}
                            type="submit"
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