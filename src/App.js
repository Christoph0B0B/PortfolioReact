import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {


    return (
        <div className="gridLayoutContainer">


            <div className="navBar">
                <NavBar></NavBar>
            </div>


            {/*<Content>*/}
            {/*</Content>*/}
            <div className="content">
                <Routes>
                    <Route path="*" element={<div>Nothing there</div>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<Portfolio/>}/>
                </Routes>
            </div>
            {/*<Header></Header>*/}
            {/*Content*/}
            {/*<div className="content">Content*/}
            {/*    /!*<div className="content-photo">Photo</div>*!/*/}
            {/*    /!*<div className="content-about">content-about</div>*!/*/}
            {/*    /!*<div className="content-competencies">content-competencies</div>*!/*/}
            {/*    /!*<div className="content-contact-form">contact form</div>*!/*/}
            {/*    <Content></Content>*/}
            {/*</div>*/}

            <div className="footer">footer
                <Footer></Footer>
            </div>
            {/*<div className="content-large">Content #1</div>*/}
            {/*<div className="content-large">Content #2</div>*/}

            {/*<Header className="header"/>*/}
            {/*<NavBar></NavBar>*/}
            {/*<Content></Content>*/}
            {/*<Footer></Footer>*/}

        </div>
    );
}

export default App;
