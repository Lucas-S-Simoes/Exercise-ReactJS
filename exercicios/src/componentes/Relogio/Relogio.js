import React from "react";
import "./relogio.css";

function Relogio() {

    function relo() {
        var data = new Date();
        var hor = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();

        if(hor < 10) {
            hor = `0${hor}`;
        }
        if(min < 10) {
            min = `0${min}`;
        }
        if(seg < 10) {
            seg = `0${seg}`;
        }

        var horas = `${hor} : ${min} : ${seg}`;
        document.querySelector("#relogio").value = horas;
    }

    setInterval(relo, 1000);

    return(
        <>
            <input type="text" id="relogio" className="relogio" />
        </>
    )
}

export default Relogio;