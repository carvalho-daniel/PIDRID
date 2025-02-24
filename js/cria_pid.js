import pid from "../model/pid.js";

// atividades de preparação e manutenção do ensino
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_prep_manu");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.prep_manu_ensino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalPrepManu; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.prep_manu_ensino[chave];
            input.className = "prep_manu_ensino";
            input.classList.add("form-control", "ch_prep_manu");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChPrepManu").text(total);
}

// atividades de apoio ao ensino
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_apoio_ensino");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.apoio_ensino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalApoioEnsino; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.apoio_ensino[chave];
            input.classList.add("form-control", "ch_apoio_ensino");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChApoioEnsino").text(total);
}

// atividades de orientação
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_orientacao");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.orientacao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalOrientacao; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.orientacao[chave];
            input.classList.add("form-control", "ch_orientacao");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChOrientacao").text(total);
}

// atividades de pesquisa e inovação
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_pesq_ino");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.pesquisa_ino) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalPesquisa; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.pesquisa_ino[chave];
            input.classList.add("form-control", "ch_pesquisa");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChPesquisa").text(total);
}

// atividades de extensão
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_extensao");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.extensao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalExtensao; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.extensao[chave];
            input.classList.add("form-control", "ch_extensao");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChExtensao").text(total);
}

// atividades de gestão institucional e representações
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_gestao_inst_repre");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.orientacao) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalGestaoInstRepre; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.orientacao[chave];
            input.classList.add("form-control", "ch_gestao_inst_repre");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChGestaoInstRepre").text(total);
}

// atividades de qualificação e capacitação
document.addEventListener("DOMContentLoaded", () => {
    let p = new pid();
    let tbody = document.getElementById("atv_quali_cap");

    if (tbody) {
        tbody.innerHTML = ""; 

        for (let chave in p.quali_capac) {
            let row = document.createElement("tr"); 

            let colNome = document.createElement("td");
            colNome.textContent = chave;

            let colInput = document.createElement("td");
            colInput.oninput = chTotalQualiCap; 

            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "any"; // Permite números decimais
            input.value = p.quali_capac[chave];
            input.classList.add("form-control", "ch_quali_cap");

            colInput.appendChild(input);
            row.appendChild(colNome);
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
        let valor = parseFloat($(this).val()) || 0; // Usando parseFloat para aceitar decimais
        total += valor;
    });
    $("#totalChQualiCap").text(total);
}
