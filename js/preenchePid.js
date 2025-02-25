import pid from "../model/pid.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formPid").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let formData = new FormData(this);
        let dadosRecebidos = {};

        formData.forEach((value, key) => {
            dadosRecebidos[key] = value;
        });

        console.log("Dados recebidos:", dadosRecebidos);
        
        atribuirDadosAoModelo(dadosRecebidos);
    });
});

function atribuirDadosAoModelo(dados) {
    let modeloPid = new pid();
    
    for (const key in dados) {
        let valor = parseFloat(dados[key]) || 0;
        
        if (modeloPid.prep_manu_ensino.hasOwnProperty(key)) {
            modeloPid.prep_manu_ensino[key] = valor;
        } else if (modeloPid.apoio_ensino.hasOwnProperty(key)) {
            modeloPid.apoio_ensino[key] = valor;
        } else if (modeloPid.orientacao.hasOwnProperty(key)) {
            modeloPid.orientacao[key] = valor;
        } else if (modeloPid.pesquisa_ino.hasOwnProperty(key)) {
            modeloPid.pesquisa_ino[key] = valor;
        } else if (modeloPid.extensao.hasOwnProperty(key)) {
            modeloPid.extensao[key] = valor;
        } else if (modeloPid.gestao_inst_repre.hasOwnProperty(key)) {
            modeloPid.gestao_inst_repre[key] = valor;
        } else if (modeloPid.quali_capac.hasOwnProperty(key)) {
            modeloPid.quali_capac[key] = valor;
        } else if (key === "justificativa") {
            modeloPid.justificativa = dados[key];
        }
    }
    
    console.log("Modelo atualizado:", modeloPid);
}
