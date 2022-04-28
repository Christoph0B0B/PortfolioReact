import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {useEffect, useState} from "react";


function App() {
    //Ziel bis Mittag persoenliche infos in db son packen
    //Alee infos in der json stehen
    const[list, setList] = useState([]);
    // const[trigger, setTrigger] = useState(true);
    //json;

    async function fetchData() {
        const httpResponse = await fetch('http://localhost:4000/items', {
            method: 'GET',
        });
        const data = await httpResponse.json();

        setList(data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    //Beim, rendern ausgeführt wird
    //Leere Array beim initialen rendern ausgefuehrt
    //Beim aendern des state useeffect ausfuehren
    // useEffect(() => {
    //     fetchData();
    //
    // }, [trigger]);
    return (
        <div className="App">
            {/*<btn onclick={setTrigger(!trigger)}>click mich</btn>*/}
            <Header/>
            <NavBar></NavBar>
            <Content></Content>
            <Footer></Footer>

        </div>
    );
}

export default App;
