export default function DisplayContactsFromDB({contacts}){

    console.log("contacts : " + contacts);

    return(<><h3>List of contacts</h3>
        <ol>

            {
            contacts.map(
                    (contact) => {
                        console.log("contact.name;:" + contact.name);
                        console.log("contact.email:" + contact.email);
                        return (<>
                            <li id={contact.name}>name:{contact.name}</li>
                            <li id={contact.email}>email:{contact.email}</li>
                        </>);
                    })
            }
        </ol>
    </>);
}
