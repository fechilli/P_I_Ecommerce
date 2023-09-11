const produtos = require('../database/produtos.json')
const fs = require('fs')
const path = require('path')


function carregarProdutos() {
    return produtos;
}

function carregaProduto(idDoProdutohttps://www.google.com/sorry/index#){
    let produto = produtos.find(p => p.id == idDoProduto);
    if(produto == undefined){
        throw new Error("Pizza inexistente");
    }
    return produto;

    
}

function adicionarProduto(produto) {

    if(produtos.length >0){

        produto.id = produtos[produtos.length - 1].id + 1
    }else{
        produto.id = 1
    }
    produtos.push(produto)


    // const caminho = path.resolve(__dirname, '../database/produtos.json')
    // fs.writeFileSync(caminho, JSON.stringify(produtos, null, 4));

    salvar()
}


function salvar(){
    const caminhoParaArquivo = path.resolve(__dirname + "/../database/produtos.json");
    fs.writeFileSync(caminhoParaArquivo, JSON.stringify(produtos, null, 4));
}

const ProdutosServices = {
    carregarProdutos,
    adicionarProduto,
    carregaProduto,
    salvar 
}
module.exports = ProdutosServices;
     

    