let tarefas = [];

function buscarTarefas(){
    try {

        let usuario = 
        fetch("https://js-lista-de-tarefas-api.onrender.com/tarefas")
        .then(resposta => resposta.json())
        .then(json => {
            if(json.tipo == "error"){
                throw json.mensagem;
            }

            tarefas = json;

        })

    } catch (error) {
        console.log("Error: ", erro.message);
    }
}

buscarTarefas();

function carregarTarefas(listaTarefas){
    let grid = document.querySelector("#tarefas");
    if(listaTarefas.length == 0){
        grid.innerHTML = "<p>Crie sua primeira tarefa</p>";
    }
}