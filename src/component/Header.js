import React from "react"
import '../css/Header.css'
// import logo from "../../src/imdb-logo.png";
import logo from '../images/IMDB_Logo.png';
// import logopro from "../../src/imdbpro.png" 
import logopro from "../images/IMDbPro.jpg"

function Header(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} alt="imdb" className="logo"/></a>

                {/* Off canvas */}
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                {/* <div className="offcanvas-body">
                    ...
                </div> */}
                </div>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>

                <a className="navbar-brand gap" href="/"><img src={logopro} alt="imdbpro" className="logopro"/></a>

                <div className="collapse navbar-collapse rightnav" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item gap">
                            <a className="nav-link active" aria-current="page" href="/">Watchlist</a>
                        </li>
                        <li className="nav-item gap">
                            <a className="nav-link" href="/">Sign In</a>
                        </li>
                        <li className="nav-item dropdown gap">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">EN</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">English US</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">French</a></li>
                                <li><a className="dropdown-item" href="/">Deutsch</a></li>
                                <li><a className="dropdown-item" href="/">Italiano</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
       </nav>
    );
}
export default Header;