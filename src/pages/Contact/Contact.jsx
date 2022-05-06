import ContactForm from "../../components/ContactForm/ContactForm";
import DisplayContactsFromDB from "../../components/DisplayContactsFromDB/DisplayContactsFromDB";
import useContacts from "../../components/ContactForm/useContacts";

import style from "./Contact.module.css";

export default function Contact(){

    const [contacts, addContact] = useContacts();

    return(
    <div className={style.contact_wrapper}>

        <ContactForm addContactOnSubmit={addContact}> </ContactForm>
        <DisplayContactsFromDB contacts={contacts}></DisplayContactsFromDB>
    </div>
    );
}