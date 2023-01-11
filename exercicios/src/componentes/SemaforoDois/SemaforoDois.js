import React from "react";
import './semaforoDois.css'

function SemaforoDois() {

    let luzVermelha = document.querySelector("#luz-vermelha");
    let luzAmarela = document.querySelector("#luz-amarela");
    let luzVerde = document.querySelector("#luz-verde");

    function LuzVermelhaSemaDois() {
        luzVermelha = document.querySelector("#luz-vermelha");
        luzAmarela = document.querySelector("#luz-amarela");
        luzVerde = document.querySelector("#luz-verde");
        luzVermelha.classList.add("opacity");
        luzAmarela.classList.remove("opacity");
        luzVerde.classList.remove("opacity");
    }

    function LuzAmarelaSemaDois() {
        luzVermelha = document.querySelector("#luz-vermelha");
        luzAmarela = document.querySelector("#luz-amarela");
        luzVerde = document.querySelector("#luz-verde");
        luzVermelha.classList.remove("opacity");
        luzAmarela.classList.add("opacity");
        luzVerde.classList.remove("opacity");
    }

    function LuzVerdeSemaDois() {
        luzVermelha = document.querySelector("#luz-vermelha");
        luzAmarela = document.querySelector("#luz-amarela");
        luzVerde = document.querySelector("#luz-verde");
        luzVermelha.classList.remove("opacity");
        luzAmarela.classList.remove("opacity");
        luzVerde.classList.add("opacity");
    }

    function Apagando() {
        luzVermelha.classList.remove("opacity");
        luzAmarela.classList.remove("opacity");
        luzVerde.classList.remove("opacity")
    }

    function AutomaticoSemaDoisVerde() {
        LuzVerdeSemaDois()
        setTimeout(AutomaticoSemaDoisAmarelo, 3000)
    }
    function AutomaticoSemaDoisAmarelo() {
        LuzAmarelaSemaDois()
        setTimeout(AutomaticoSemaDoisVermelho, 2000)
    }
    function AutomaticoSemaDoisVermelho() {
        LuzVermelhaSemaDois()
        setTimeout(AutoDesligar, 3000)
    }
    function AutoDesligar() {
        Apagando()
    }
    function AutomaticoSemaDois() {
        setTimeout(AutomaticoSemaDoisVerde, 1000)
    }
   
    return (
        <div className="container-semaforoDois">
            <div className="semaforo-luzes">
                <div id="luz-vermelha" className="luz-vermelha "></div>
                <div id="luz-amarela" className="luz-amarela"></div>
                <div id="luz-verde" className="luz-verde"></div> 
            </div>
            <div className="btns-semaDois">
                <button onClick={LuzVermelhaSemaDois} id="ligar-vermelho">Vermelho</button>
                <button onClick={LuzAmarelaSemaDois} id="ligar-amarelo">Amarelo</button>
                <button onClick={LuzVerdeSemaDois} id="ligar-verde">Verde</button>
                <button onClick={Apagando} id="desligar-semaDois">Desligar</button>
                <button onClick={AutomaticoSemaDois} id="auto-semaDois">Automático</button>
            </div>       
        </div>
    )
}

export default SemaforoDois;