const produtos = require('../database/produtos.json')
const path = require('path')
const ProdutosController = {

    show:(req,res)=>{

        const produto = produtos

      res.render('index.ejs', produto)
    },

    cadastroProduto:  (req, res) =>{
        res.sendFile(path.resolve('./views/cadastro.html'))
    },

    listaDeProdutos:(req, res) =>{
        res.sendFile(path.resolve('./views/index.html'))
    },

    detalheProduto: (req, res) =>{
        res.sendFile(path.resolve('./views/detalhe-produto.html'))
    },

    carinhoProduto: (req, res) =>{
        res.sendFile(path.resolve('./views/carrinho.html'))
    }

};

module.exports = ProdutosController;