


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
    else{
        alert('Favor informar os campos!');
    }
}
function criarLista(){

    let tabela = "<tr><td>Valor</td></tr>";
    for(let i = 0; i<= (dadosLista.length-1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;          
    }
}
function excluir(i){  //parâmetro i
    dadosLista.splice((i-1), 1);   //método da array para excluir ou editar
    document.getElementById('tabela').deleteRow(i);
    
    }

