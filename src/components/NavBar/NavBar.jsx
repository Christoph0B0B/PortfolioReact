import styles from "./NavBar.module.css"
import {Link} from "react-router-dom";


export default function NavBar() {
    return (<>

        {/*<nav className={styles.container}><h1>Hi im the navbar</h1></nav>*/}
<nav className={styles.nav}>
    <ul className={styles.navbar}>
        <li className={styles.navItem} >
            <Link className={styles.navLink} to="/home">Home
            </Link>
        </li>
        <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contact">Contact</Link>
        </li>
        <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">Portfolio</Link>
        </li>

    </ul>
</nav>


    </>)
        ;
}