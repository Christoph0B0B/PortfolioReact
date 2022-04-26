import logo from "../../logo.svg";
import styles from "./Content.module.css"
import {findAllByDisplayValue} from "@testing-library/react";

export default function Content() {
    return (

            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col-8">
                    <div><img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a></div>
                </div>
                <div className="col">
                    Column
                </div>
            </div>
    );
}