import React, {useState} from "react";
import "./semaforo.css";

import SemaDesligado from "./img/desligado.png"
import SemaVerde from "./img/verde.png"
import SemaAmarelo from "./img/amarelo.png"
import SemaVermelho from "./img/vermelho.png"


function Semaforo() {

    const [ligado, setLigado] = useState(SemaDesligado)

    function verdeAuto() {
        setLigado(SemaVerde)
        setTimeout(amareloAuto, 7000)
    }

    function amareloAuto() {
        setLigado(SemaAmarelo)
        setTimeout(vermelhoAuto, 3000)
    }

    function vermelhoAuto() {
        setLigado(SemaVermelho)
        setTimeout(desliga, 7000)
    }

    function desliga() {
        setLigado(SemaDesligado)
    }

    function automatico() {
        setTimeout(verdeAuto, 1000)
    }

    return (
        <div className="container-semaforo">
            <img src={ligado} id="image" alt="Imagem do Semaforo" />
            <div className="btns-semaforo">
                <button onClick={()=>setLigado(SemaVerde)} className="verde-semaforo"></button>
                <button onClick={()=>setLigado(SemaAmarelo)} className="amarelo-semaforo"></button>
                <button onClick={()=>setLigado(SemaVermelho)} className="vermelho-semaforo"></button>
                <button onClick={automatico} className="automatico-semaforo"></button>
                <button onClick={()=>setLigado(SemaDesligado)} className="desliga-semaforo"></button>
            </div>
        </div>
    )
}

export default Semaforo;
