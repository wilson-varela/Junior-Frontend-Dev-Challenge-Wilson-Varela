import React from 'react';
import Input from '../ui/input/Input';
import auxclass from '../../containers/mainContent/MainContent.module.scss';
import Button from '../ui/button/Button';

const Form = () =>{
    return(
        <form>
            <Input inputLabel="Nome" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Email" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Telefone" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Website" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Nome da empresa" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Caategorias" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Rua" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Cidade" inputType="text" width={auxclass.MediumInput}/>
            <Input inputLabel="Código Postal" inputType="number" width={auxclass.MediumInput}/>
            <Button 
                width={classes.SmallBtn}
                bgColor={classes.GreenBg} 
                color={classes.WhiteCl}
                hover={classes.BtnGreen}
                type="submit"
            >
                Gravar Contacto
            </Button>
        </form>
    );
}
export default Form;