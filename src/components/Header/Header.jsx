import Title from "../Title/Title";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <h1>Header Text</h1>
            <Title></Title>
            <Title/>
            <NavBar></NavBar>
        </div>
    );
}