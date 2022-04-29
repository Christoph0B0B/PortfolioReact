import {useEffect, useState} from "react";
import ContactService from "./ContactService";

export default function ContactForm() {


    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    // const [{tmpName, tmpEmail}, setTmpNameEmail ] = useState({});

    useEffect(() => {
        // loadDataFromAPi();
    }, []);

    // useEffect((name, email) => {
    //     sendDataToApi(name, email);
    // }, [onSubmit])

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        ContactService.addContact({name: event.target.name.value, email:event.target.email.value});
        // setTmpNameEmail({name, email});
        console.log(`name: ${name}, email: ${email}`)
    }

    // function functionloadDataFromAPi(){
    //     sendDataToApi
    // }



        return (

            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>Submit form</h1>
                    <label htmlFor="name">name:</label>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={onNameChange}
                    />
                    <br/>
                    <label htmlFor="email">email:</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={onEmailChange}
                    />
                    <br/>
                    <button>Submit</button>
                </form>

                <ol>
                    {/*<li>id:{id}</li>*/}
                    <li>name:{name}</li>
                    <li>email:{email}</li>
                </ol>

            </div>
        );
    }