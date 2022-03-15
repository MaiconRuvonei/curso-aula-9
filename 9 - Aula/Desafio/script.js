// import { removePontos, removeHifens } from "./formatador.js"

dados = []

async function buscarCep() {

    let cep = document.getElementById("cep").value
    //  cep = removePontos(cep)
    //  cep = removeHifens(cep)

    if (cep == "") {
        alert("Favor Preencher o CEP!")

    } else {

        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let listaCep = await consultaCep.json()
        
        if (listaCep.erro){
            alert("O Cep informado é inválido!")
        } else {
        

        // console.log("Resposta" + consultaCep);

        listaCarregado = listaCep

        document.getElementById("logradouro").value = listaCarregado.logradouro
        document.getElementById("complemento").value = listaCarregado.complemento
        document.getElementById("cidade").value = listaCarregado.localidade
        document.getElementById("bairro").value = listaCarregado.bairro
        document.getElementById("estado").value = listaCarregado.uf
        }
    }
}

function salvar() {

    buscarDados()

    let sectionResultado = document.getElementById("resultado")

    // document.getElementById("resultado").innerHTML = ""

    limparHtml()



    for (let i = 0; i < dados.length; i++) {

        sectionResultado.innerHTML += `
        
        <fieldset>

        <legend>Dados Pessoais de ${dados[i].nome}</legend>

        <div id="listaClientes">
            <li>Nome: ${dados[i].nome}</li>
            <li>Idade: ${dados[i].idade}</li>
            <li>Sexo: ${dados[i].sexo}</li>
            <li>CEP: ${dados[i].cep}</li>
            <li>Logradouro: ${dados[i].logradouro}</li>
            <li>Complemento: ${dados[i].complemento}</li>
            <li>Bairo: ${dados[i].bairro}</li>
            <li>Cidade: ${dados[i].cidade}</li>
            <li>Estado: ${dados[i].estado}</li>
            
        </div>       
    `



    }
}

function limparHtml() {

    document.getElementById("nome").value = ""
    document.getElementById("idade").valueAsNumber = ""
    document.getElementById("sexo").value = ""
    document.getElementById("cep").valueAsNumber = ""
    document.getElementById("logradouro").value = ""
    document.getElementById("complemento").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("resultado").innerHTML = ""
}

function buscarDados() {

    let notificacao = ""

    let inputNome = document.getElementById("nome").value
    let inputIdade = document.getElementById("idade").value
    let inputSexo = document.getElementById("sexo").value
    let inputCep = document.getElementById("cep").value
    let inputLogradouro = document.getElementById("logradouro").value
    let inputComplemento = document.getElementById("complemento").value
    let inputBairro = document.getElementById("bairro").value
    let inputCidade = document.getElementById("cidade").value
    let inputEstado = document.getElementById("estado").value

    if (inputNome == "") {
        notificacao += "Nome, "
    }

    if (inputIdade == "") {
        notificacao += "Idade, "
    }
    if (inputSexo == "") {
        notificacao += "Sexo, "
    }
    if (inputCep == "") {
        notificacao += "CEP, "
    }
    if (inputLogradouro == "") {
        notificacao += "Logradouro, "
    }
    if (inputBairro == "") {
        notificacao += "Bairro, "
    }
    if (inputCidade == "") {
        notificacao += "Cidade, "
    }
    if (inputEstado == "") {
        notificacao += "Estado, "
    }
    if (notificacao != "") {
        alert("Os Seguintes Campos Obrigatórios: " + notificacao + " não foram preenchidos!")
    } else {

    

        let arrylista = {}

        arrylista.nome = inputNome
        arrylista.idade = inputIdade
        arrylista.sexo = inputSexo
        arrylista.cep = inputCep
        arrylista.logradouro = inputLogradouro
        arrylista.complemento = inputComplemento
        arrylista.bairro = inputBairro
        arrylista.cidade = inputCidade
        arrylista.inputEstado = inputEstado

        dados.push(arrylista)

        document.getElementById("titListaClientes").style = "display:block"
    }
}