import {useEffect, useState} from "react";

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
        sendDataToApi(event.target.name.value, event.target.email.value);
        // setTmpNameEmail({name, email});
        console.log(`name: ${name}, email: ${email}`)
    }

    // function functionloadDataFromAPi(){
    //     sendDataToApi
    // }

    async function fetchDataFromApi() {
        const httpResponse = await fetch('http://localhost:4000/contacts', {method: 'GET'});
        const data = await httpResponse.json();
        setName(data.name);
        setEmail(data.email);
        console.log("setName");
    }

    async function sendDataToApi(name="irgendeinname", email="miregal@egal.de") {
        console.log("name: " + name, "email: " + email);
        const httpResponse = await fetch('http://localhost:4000/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: new Date(), name: name, email: email})
        }).then(function (res) {
            console.log("res" + res);
        }).catch(function (res) {
            console.log("catch res:" + res);
        })
    }

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