import styles from "./Footer.module.css"
import {Link} from "react-router-dom";


export default function Footer({copyright}) {
    return (
        <div className={styles.footer}>

            <span className={styles.pCopyright}>&copy;
                {new Date(2022, 1, 1).getFullYear()}-{new Date().getFullYear()}
                Vorname, Nachname</span>

            <Link className={styles.textLink} to="/contact">

                <span className="fa-stack fa-1x">
                Impressum
                    </span>
            </Link>
            <Link className={styles.textLink} to="/contact">
                <span className="fa-stack fa-1x">
                Datenschutz
                    </span>
            </Link>
            {/*<div className={styles.animatedLinks}>*/}

            {/*</div>*/}
            <div className={styles.socialMediaLinks}>
                <Link className="footer-link" to="/contact">
                <span className="fa-stack fa-2x">
                    <i className={`${styles.square} fa-solid fa-square fa-stack-2x`}></i>
                    <i className={`${styles.icon} fa-brands fa-github fa-stack-1x fa-inverse`}></i>
                </span>
                </Link>

                <Link className="footer-link" to="/contact">
                <span className="fa-stack fa-2x">
                    <i className={`${styles.square} fa-solid fa-square fa-stack-2x`}></i>
                    <i className={`${styles.icon} fa-brands fa-linkedin fa-stack-1x fa-inverse`}></i>
                </span>
                </Link>
                <Link className="footer-link" to="/contact">
                <span className="fa-stack fa-2x">
                    <i className={`${styles.square} fa-solid fa-square fa-stack-2x`}></i>
                    <i className={`${styles.icon} fa-brands fa-twitter fa-stack-1x fa-inverse`}></i>
                </span>
                </Link>
                <Link className="footer-link" to="/contact">
                <span className="fa-stack fa-2x">
                    <i className={`${styles.square} fa-solid fa-square fa-stack-2x`}></i>
                    <i className={`${styles.icon} fa-solid fa-facebook fa-stack-1x fa-inverse`}></i>
                </span>
                </Link>
            </div>
        </div>
    );
}