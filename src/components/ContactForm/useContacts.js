//
// Verwaltet die Kontakte
// hinzufuegen
// entfernen
// updaten
//


import ApiService from "../../Api/ApiService";
import {useEffect, useState} from "react";



export default function useContacts()
{
    const [contacts, setContacts] = useState([]);

    useEffect(function () {
        getAllContacts();
    }, [])


    function addContact(contact) {
        //aus dem alten state bzw dessen array die elmente rausnehemen und mit dem
        //neuen contact in ein neues array zusammenfuegen
        setContacts([contact, ...contacts]);
        //Ebenfalls die Datei aktualisieren Promise returned ignorieren?
        void ApiService.sendDataToApi('http://localhost:4000/contacts', contact);
    }

    async function getAllContacts() {
        const apiContacts = await ApiService.fetchDataFromApi('http://localhost:4000/contacts');
        setContacts(apiContacts);
    }

    return[contacts, addContact];

};
