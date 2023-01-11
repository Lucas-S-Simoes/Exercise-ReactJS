import React from "react";
import "./apicep.css";

function ApiCep() {

    function Endereco() {

        let cep = document.querySelector("#cep").value;

        if (cep.length !== 8) {
            alert("CEP inválido")
            return
        }

        let url = `http://viacep.com.br/ws/${cep}/json/`
        fetch(url).then(function(response){
            response.json().then(function(data) {
                console.log(data)
                Mostrar(data);
            })
        })

    function Mostrar(dados) {
        
        let resultado = document.querySelector("#result");

        if (dados.erro) {
            resultado.innerHTML = "<p>Dados indisponíveis</p>"

        } else {
            resultado.innerHTML = `
            <p>Aqui está o endereço.</p>
            <p><u>Logradouro: ${dados.logradouro}</u></p>
            <p><u>Complemento: ${dados.complemento}</u></p>
            <p><u>Bairro: ${dados.bairro}</u></p>
            <p><u>Cidade: ${dados.localidade}</u></p>
            <p><u>DDD: ${dados.ddd}</u></p>`
        }
       
        }
    }

    return(
        <div className="espaco-cep">
            <div className="container-cep">
                <h1 className="cep-title">Consultando o CEP</h1>
                <label for="cep" className="label-cep">CEP</label>
                <input type="text" inputMode="numeric" id="cep" className="cep" placeholder="01001000"/>
                <button onClick={Endereco} className="btn-cep">Procurar</button>
                <div id="result" className="result">

                </div>
            </div>
        </div>
    )
}

export default ApiCep;