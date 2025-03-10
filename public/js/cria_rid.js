import pid from "../model/pid.js";
import rid from "../model/rid.js";

// atividades de preparação e manuntençao do ensino
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_prep_manu");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.prep_manu_ensino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.prep_manu_ensino[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalPrepManu; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.prep_manu_ensino[chave];
            input.className = "prep_manu_ensino";
            input.classList.add("form-control", "ch_prep_manu");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_prep_manu' não encontrado!");
    }
});

function chTotalPrepManu() {
    let total = 0;
    $(".ch_prep_manu").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChPrepManu").text(total); // Arredonda para 2 casas decimais
}

// atividades de apoio ao ensino
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_apoio_ensino");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.apoio_ensino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.apoio_ensino[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalApoioEnsino; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.apoio_ensino[chave];
            input.classList.add("form-control", "ch_apoio_ensino");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_apoio_ensino' não encontrado!");
    }
});

function chTotalApoioEnsino() {
    let total = 0;
    $(".ch_apoio_ensino").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChApoioEnsino").text(total); // Arredonda para 2 casas decimais
}

// atividades de orientação
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_orientacao");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.orientacao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.orientacao[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalOrientacao; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.orientacao[chave];
            input.classList.add("form-control", "ch_orientacao");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_orientacao' não encontrado!");
    }
});

function chTotalOrientacao() {
    let total = 0;
    $(".ch_orientacao").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChOrientacao").text(total); // Arredonda para 2 casas decimais
}

// atividades de pesquisa e inovação
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_pesq_ino");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.pesquisa_ino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.pesquisa_ino[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalPesquisa; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.pesquisa_ino[chave];
            input.classList.add("form-control", "ch_pesquisa");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_pesquisa' não encontrado!");
    }
});

function chTotalPesquisa() {
    let total = 0;
    $(".ch_pesquisa").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChPesquisa").text(total); // Arredonda para 2 casas decimais
}

// atividades de extensão
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_extensao");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.extensao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.extensao[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalExtensao; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.extensao[chave];
            input.classList.add("form-control", "ch_extensao");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_extensao' não encontrado!");
    }
});

function chTotalExtensao() {
    let total = 0;
    $(".ch_extensao").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChExtensao").text(total); // Arredonda para 2 casas decimais
}

// atividades de gestão institucional e representações
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_gestao_inst_repre");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.orientacao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.orientacao[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalGestaoInstRepre; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.orientacao[chave];
            input.classList.add("form-control", "ch_gestao_inst_repre");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_gestao_inst_repre' não encontrado!");
    }
});

function chTotalGestaoInstRepre() {
    let total = 0;
    $(".ch_gestao_inst_repre").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChGestaoInstRepre").text(total); // Arredonda para 2 casas decimais
}

// atividades de qualificação e capacitação
document.addEventListener("DOMContentLoaded", () => {
    let r = new rid();
    let p = new pid();
    let tbody = document.getElementById("atv_quali_cap");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in r.quali_capac) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colPid = document.createElement("td");
            colPid.textContent = p.quali_capac[chave];

            let colInput = document.createElement("td");
            colInput.oninput = chTotalQualiCap;

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.value = r.quali_capac[chave];
            input.classList.add("form-control", "ch_quali_cap");

            colInput.appendChild(input);
            row.appendChild(colNome);
            row.appendChild(colPid);
            row.appendChild(colInput);
            tbody.appendChild(row); 
        }
    } else {
        console.error("Elemento com ID 'atv_quali_cap' não encontrado!");
    }
});

function chTotalQualiCap() {
    let total = 0;
    $(".ch_quali_cap").each(function() {
        let valor = parseFloat($(this).val()) || 0;
        total += valor;
    });
    $("#totalChQualiCap").text(total); // Arredonda para 2 casas decimais
}
