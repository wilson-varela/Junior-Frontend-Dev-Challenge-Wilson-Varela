import React from 'react';
import Contact from './contact/Contact';
import Modal from '../../components/ui/modal/Modal';
import ContactDetails from './contactdetails/ContactDetails';
const Contacts = (props) =>{
    return(
        
        props.contacts.map((contact,index)=>{
            return(
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    empresa = {contact.company.name}
                    website = {contact.website}
                    zip = {contact.address.zipCode}
                    phone = {contact.phone}
                    clicked={props.clicked}
                    
                />

            )
        })
        
    );
} 
export default Contacts;