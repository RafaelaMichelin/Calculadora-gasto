


//Criando array
var dadosLista = [];


function salvardados(){
    let categoria = document.getElementById('categoria').value;
    let valor = document.getElementById('valor').value;
    let descricao = document.getElementById('descricao').value;

    
    if(categoria && valor && descricao){
       
        dadosLista.push(categoria);
        dadosLista.push(valor);
        dadosLista.push(descricao);
       console.log(dadosLista);
       criarLista();
       //apagar o nome do campo input
       document.getElementById("categoria").value = "";
       document.getElementById("valor").value = "";
       document.getElementById("descricao").value = "";
    }
}
function criarLista(){

    let tabela = "<tr><td>Categoria</td><td>Valor</td><td>Descricao</td></tr>";
    for(let i = 0; i<= (dadosLista.length-1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "<td><button class='btn'editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"; 
        document.getElementById('tabela').innerHTML = tabela;          
    }
}


