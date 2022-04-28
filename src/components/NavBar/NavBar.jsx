import "./NavBar.module.css"


export default function NavBar() {
    return (
        <>

            {/*<nav className={styles.container}><h1>Hi im the navbar</h1></nav>*/}

            <nav className="navbar  fixed-left navbar-expand-lg navbar-dark bg-secondary">
                <a className="navbar-brand" href="#"></a>
                <div className="collapse navbar-collapse" id="navbarNav"> </div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>


        </>
    );
}