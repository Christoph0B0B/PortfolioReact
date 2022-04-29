import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <div className={styles.footer}>
            <h1>Hello Footer begin</h1>
            {/*<a href="#" className="fa-solid fa-user"></a>*/}
            {/*<a href="#" className="fa fa-linkedin"></a>*/}
            <a href="#" className="fa-brands fa-github">
                <i className="fa-brands fa-github"></i>
            </a>
            <i className="fa-solid fa-thumbs-up fa-5x"></i>
            <i className="fa-brands fa-github"></i>
            {/*<FontAwesomeIcon icon="fa-regular fa-house"/>*/}
            <h1>Hello Footer end</h1>


        </div>
    );
}