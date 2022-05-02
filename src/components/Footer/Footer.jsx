import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <div className={styles.footer}>


            <a href="your link here"><i className="fa fa-brands fa-github fa-4x"></i></a>
            <a href="your link here"> <i className="fa fa-linkedin-square fa-4x"></i></a>
            <a href="your link here"> <i className="fa fa-twitter-square fa-4x"></i></a>
            <a href="your link here"> <i className="fa fa-facebook-square fa-4x"></i></a>


        </div>
    );
}