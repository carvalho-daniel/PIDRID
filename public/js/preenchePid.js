import { pid } from "../../model/pid.js";

function preenchePid() {
    var totalChPrepManu = parseFloat(document.getElementById('totalChPrepManu').innerHTML)
    
    ch = document.querySelectorAll('.prep_manu_ensino');

    for(c of ch) {
        alert(c.value)
    }

}