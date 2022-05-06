import Title from "../Title/Title";

import styles from "./Header.module.css"

export default function Header({title}) {
    return (
        <div className={styles.header}>
            <p>{title}</p>
            {/*<Title/>*/}
        </div>
    );
}