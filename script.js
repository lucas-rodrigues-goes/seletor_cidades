

const updateSelUF = async function() {

    let selectUF = document.getElementById("UF")
    selectUF.innerHTML = "<option></option>";

    let estados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response)=>response.json())

    for( let i in estados ) {
        UF = estados[i]

        let option = document.createElement("option")
        option.textContent = UF["nome"];
        option.value = UF["sigla"];
        selectUF.appendChild(option)
    }

}

const updateSelCidade = async function() {
    let selectUF = document.getElementById("UF"),
    selectCidade = document.getElementById("cidade");

    selectCidade.innerHTML = "<option></option>";

    let cidades = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ selectUF.value +'/distritos')
    .then((response)=>response.json())
    
    for( let i in cidades ) {
        cidade = cidades[i]

        let option = document.createElement("option")
        option.textContent = cidade["nome"];
        selectCidade.appendChild(option)
    }
}

const run = function () {

    updateSelUF();

    let selectUF = document.getElementById("UF");
    selectUF.addEventListener("change", updateSelCidade);
    

}

document.addEventListener("DOMContentLoaded", run)