import logo from "../../logo.svg";
// import fotoStrichman from "/strichman.png";
import styles from "./Content.module.css"

import ContactForm from "../ContactForm/ContactForm";
import {useState} from "react";

import ApiService from "../../Api/ApiService";
import Competency from "../Competencies/Competency";
import CompetencyList from "../Competencies/CompetencyList";

export default function Content({hobbies, skills, personalInfos}) {
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

    return (
        <div className={styles.main}>
            <div className="row">
                <div className="col-2">
                    <img src={process.env.PUBLIC_URL + "/strichman.png"} alt="foto" className="rounded"/>
                    Column
                </div>
                <div className="col-8">
                    <section>
                        <h2>Wer bin ich</h2>
                        <p>portfolio</p>
                    </section>

                    <div className="infotext">
                        <h2>infotext</h2>
                    </div>
                </div>

                <CompetencyList/>
                <CompetencyList/>
                <ContactForm addContactOnSubmit={addContact}> </ContactForm>

            </div>
        </div>

    );
}