import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'

import Relogio from "../Relogio/Relogio";


function Navbar(){
    return(
        <nav className="navbar" id="navbar">
            <ul className="navbar-container" id="nav-container">
                <li><Relogio /></li>
                <div className="line1"></div>
                <li><h3 className="nav-title"><Link to='/' className="link">Práticas React JS</Link></h3></li>
                <div className="line1"></div>
                <li><Link to='/lampada' className="link">Lâmpada</Link></li>
                <div className="line1"></div>
                <li><Link to='/semaforo' className="link">Semáforo</Link></li>
                <div className="line1"></div>
                <li><Link to='/semaforodois' className="link">Semáforo T2</Link></li>
                <div className="line1"></div>
                <li><Link to='/apicep' className="link">CEP</Link></li>
                <div className="line1"></div>
            </ul>
        </nav>
    )
}

export default Navbar;