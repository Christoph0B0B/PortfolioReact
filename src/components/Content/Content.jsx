import logo from "../../logo.svg";
// import fotoStrichman from "/strichman.png";
import styles from "./Content.module.css"
import {findAllByDisplayValue} from "@testing-library/react";
import ContactForm from "../ContactForm/ContactForm";

export default function Content({hobbies, skills, personalInfos}) {
    return (
        <div className={styles.main}>
            <div className="row">
                <div className="col-2">
                    <img src={process.env.PUBLIC_URL + "/strichman.png"} alt="foto" className="rounded"/>
                    Column
                </div>
                <div className="col-8">
                    <section>
                        <h2>Wer bin ich</h2>
                        <p>portfolio</p>
                    </section>

                    <div className="infotext">
                        <h2>infotext</h2>
                    </div>
                </div>
                <div className="col-2">
                    <ul className="list-group">
                        <li className="list-group-item">hobbies</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <ContactForm/>

            </div>
        </div>

    );
}