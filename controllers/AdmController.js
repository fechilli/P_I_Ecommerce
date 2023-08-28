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
      
        let pizza = {
            nome: req.body.nome,
            preco: Number(req.body.preço),
            cor: req.body.cor,
            tamanho: req.body.tamanho,
            detalhes: req.body.Detalhes,
            img:"/img/roupa6.jpg"
            
        }
        
        ProdutosServices.adicionarProduto(pizza)

        res.redirect('/adm/produtos')
       
        
    },

    editarProdutos:(req, res) =>{
       console.log(req.params.id )
    },

  

}


module.exports = AdmController;