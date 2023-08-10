const produtos = require('../database/produtos.json')
const path = require('path')
const ProdutosServices = require('../services/services')


const AdmController ={

    mostrarProdutos: (req,res) => {

        const produtos = ProdutosServices.carregarProdutos();
       
        res.render('lista-produtos-adm.ejs', {produtos})
        //carregar produtos

        //renderizar a view listar produtos passando as pizzas para ela
        
    },

    criarProduto: (req, res) => {
        res.render('form-add-produtos-adm.ejs')
    },

    gravarProdutos: (req, res) => {
        console.log(req.body)
        res.send(req.body)
    }


}


module.exports = AdmController;