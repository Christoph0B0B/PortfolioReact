//
// Verwaltet die Kontakte
// hinzufuegen
// entfernen
// updaten
//


import ApiService from "./ApiService";
import {useState} from "react";



function ContactService()
{
    const [contacts, setContacts] = useState([]);

    function addContact(contact) {
        //aus dem alten state bzw dessen array die elmente rausnehemen und mit dem
        //neuen contact in ein neues array zusammenfuegen
        setContacts([contact, ...contacts]);
        //Ebenfalls die Datei aktualisieren Promise returned ignorieren?
        void ApiService.sendDataToApi('http://localhost:4000/contacts', contact);
    }

    function getAllContacts() {
        return ApiService.fetchDataFromApi('http://localhost:4000/contacts');
    }

    return(
        <>
            <h1>Adesso Kickstart</h1>
            <ul>
                {contacts.map((contact) => (
                    <li>
                        <strong>{contact.name}</strong> ({contact.email})
                    </li>
                ))}
            </ul>
        </>
    );

};

export default ContactService;