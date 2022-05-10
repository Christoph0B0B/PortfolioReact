import styles from './DisplayContactsFromDB.module.css'

export default function DisplayContactsFromDB({contacts}) {

    return (<><h3>List of contacts</h3>

        <ol>
            {
                contacts.map(
                    (contact) => {
                        return (
                            <div className={styles.wrapper}>

                                    <li id={contact.name}>
                                        name:{contact.name}
                                        <br/>
                                        email:{contact.email}
                                    </li>

                                    {/*<li id={contact.email}></li>*/}


                            </div>);
                    })
            }
        </ol>

    </>);
}
