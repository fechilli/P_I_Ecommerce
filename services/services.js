const produtos = require('../database/produtos.json')


function carregarProdutos() {
    return produtos;
}

const ProdutosServices = {
    carregarProdutos,
}
module.exports = ProdutosServices;