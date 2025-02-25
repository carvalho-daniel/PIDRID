import { rid } from "../model/rid.js";

function preencheRid() {
    var totalChPrepManu = parseFloat(document.getElementById('totalChPrepManu').innerHTML)
    window.location.href = "../index.html";
    ch = document.querySelectorAll('.prep_manu_ensino');

    for(c of ch) {
        alert(c.value)
    }

}