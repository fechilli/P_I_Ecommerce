const express = require('express');

const router = express.Router();
const ProdutosController = require('./controllers/ProdutosController')

//mostra a index
router.get('/', ProdutosController.show)
router.get('/cadastro', ProdutosController.cadastroProduto);
router.get('/produtos', ProdutosController.listaDeProdutos);
router.get('/produto/detalhe',ProdutosController.detalheProduto);
router.get('/produto/carrinho',  ProdutosController.carinhoProduto);



module.exports = router;
