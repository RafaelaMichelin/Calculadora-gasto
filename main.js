
//Criando array
var dadosLista=[];

//função salvar dados
function salvardados(){
    let categoria = document.getElementById('categoria').value;
    let valor = document.getElementById('valor').value;
    let descricao = document.getElementById('descricao').value;

    if(categoria || valor || descricao){
       //metodo para colocar o valor dentro do array 
       dadosLista.push(categoria); 
       dadosLista.push(valor);
       dadosLista.push(descricao);

       console.log(dadosLista);
       criaLista();
       //apagar o nome do campo input
       document.getElementById("categoria").value = "";
       document.getElementById("valor").value = "";
       document.getElementById("descricao").value = "";
    }
    else {
        alert('Favor informar os campos!');
    }
}