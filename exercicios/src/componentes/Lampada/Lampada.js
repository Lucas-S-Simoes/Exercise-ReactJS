import React, { useState } from "react";
import "./lampada.css"

import Ligada from './img/lampImg/ligada.jpg'
import Desligada from './img/lampImg/desligada.jpg'
import Quebrado from './img/lampImg/quebrada.jpg'


function Lampada() {

    const [ligado, setLigado] = useState(Desligada)

    const quebrado = () => {
        setLigado(Quebrado)
        let btnLigado = document.querySelector("#btn-ligar")
        let btnDesligado = document.querySelector('#btn-desliga')
        btnLigado.setAttribute("disabled", "")
        btnDesligado.setAttribute('disabled', "")
    }

    const trocar = () => {
        setLigado(Desligada)
        let btnLigado = document.querySelector("#btn-ligar")
        let btnDesligado = document.querySelector('#btn-desliga')
        btnLigado.removeAttribute("disabled")
        btnDesligado.removeAttribute("disabled")
    }

    return(
        <div className="container">
            <img onDoubleClick={quebrado} src={ligado} id="image" className="image" alt="lampada"/>
            <div className="btns">
                <button onClick={()=>setLigado(Ligada)} className="btn-ligar" id="btn-ligar">Ligar</button>
                <button onClick={()=>setLigado(Desligada)} className="btn-desliga" id="btn-desliga">Desligar</button>
                <button onClick={trocar} className="btn-trocar" id="btn-trocar">Trocar</button>
            </div>
        </div>
    )
    
}

export default Lampada;
