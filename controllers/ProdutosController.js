const produtos = require('../database/produtos.json')

const ProdutosController = {

    show:(req,res)=>{

        const produto = produtos




    


      res.render('index.ejs', produto)
    },

    cadastroProduto:  (req, res) =>{
        res.render('cadastro.ejs')
    },

    listaDeProdutos:(req, res) =>{
        res.render('lista-produtos.ejs')
    },

    detalheProduto: (req, res) =>{
        res.render('detalhe-produto.ejs')
    },

    carinhoProduto: (req, res) =>{
        res.render('carrinho.ejs')
    },

    buscarProdutos:(req, res) =>{
        
        let trecho = req.query.busca
        res.send(trecho + "oieee")
    }


};

module.exports = ProdutosController;