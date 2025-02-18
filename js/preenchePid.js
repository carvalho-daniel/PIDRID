import pid from "../model/pid.js";

function preenchePid() {
    var totalChPrepManu = parseFloat(document.getElementById('totalChPrepManu').innerHTML)
    
    ch = document.querySelectorAll('.prep_manu_ensino');

    for(c of ch) {
        alert(c.value)
    }

    // pid.setChPrepManuEnsino();

}

document.addEventListener("DOMContentLoaded", () => {
    // Captura o envio do formulário
    document.getElementById("formPid").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        let formData = new FormData(this);
        let dadosRecebidos = {};

        // Converte FormData para objeto JSON
        formData.forEach((value, key) => {
            dadosRecebidos[key] = value;
        });

        // Exibe os dados no console (ou pode ser usado de outra forma)
        console.log("Dados recebidos:", dadosRecebidos);
        teste();
    });
});

function teste() {
    pid.setChPrepManuEnsino();
}