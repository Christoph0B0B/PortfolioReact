import styles from './DisplayContactsFromDB.module.css'
export default function DisplayContactsFromDB({contacts}){

    return(<><h3>List of contacts</h3>
        <ol>

            {
            contacts.map(
                    (contact) => {
                        return (
                            <div className={styles.wrapper}>
                            <li id={contact.name}>name:{contact.name}</li>
                            <li id={contact.email}>email:{contact.email}</li>
                        </div>);
                    })
            }
        </ol>
    </>);
}
