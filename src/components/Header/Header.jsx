import Title from "../Title/Title";

import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <p>Header</p>
            <Title/>
        </div>
    );
}