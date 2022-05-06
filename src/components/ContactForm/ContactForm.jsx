import {useEffect, useState} from "react";
import {getAllContacts} from "../../Api/ApiService";
import Competency from "../Competencies/Competency";


export default function ContactForm({addContactOnSubmit}) {

    const [contactFormData, setContactFormData] = useState({
        name: null,
        email: null,
    });

    useEffect(() => {
        // loadDataFromAPi();
        let data = getAllContacts();
        setContactFormData({...contactFormData, data});
    }, []);

    // useEffect((name, email) => {
    //     sendDataToApi(name, email);
    // }, [onSubmit])

    function onInputChange(event) {
        setContactFormData({
            ...contactFormData,
            [event.target.name]: event.target.value
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        // ContactService.addContact({name: event.target.name.value, email:event.target.email.value});
        // addContactOnSubmit({
        //     name:name,
        //     email:email
        // });
        addContactOnSubmit(contactFormData);
        //event.target.reset();
        // setTmpNameEmail({name, email});
        console.log(`name: ${contactFormData.name}, email: ${contactFormData.email}`)
    }

    // function functionloadDataFromAPi(){
    //     sendDataToApi
    // }


    return (

        <div className="container">
            <fieldset>
                <legend>Kontakdaten hinterlassen</legend>
                <form className="row gy-2 gx-3 align-items-center" onSubmit={onSubmit}>

                    <div className="col-auto">
                        <label htmlFor="name">name:</label>
                        <input
                            name="name"
                            type="text"
                            value={contactFormData.name}
                            onChange={onInputChange}
                        />
                    </div>
                    <span></span>
                    <div className="col-auto">
                        <label htmlFor="email">email:</label>
                        <input
                            name="email"
                            type="email"
                            value={contactFormData.email}
                            onChange={onInputChange}
                        />
                    </div>
                    <br/>
                    <label htmlFor="textarea">Falls du mir etwas mitteilen möchtest:</label>

                    <textarea id="textarea" name="textarea"
                              rows="5" cols="33">
                    Falls du mir etwas mitteilen möchtest
                    </textarea>


                    <button className="btn btn-primary">Submit</button>
                </form>
            </fieldset>

        </div>

    );
}