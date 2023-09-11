const express = require('express');
const AdmController = require('./controllers/AdmController');
const editParts = require('./controllers/EditParts');
const  multer   =  require ( 'multer' );

const  upload  =  multer ( {  destino : 'public/img'  } )

const router = express.Router();
const ProdutosController = require('./controllers/ProdutosController')

//mostra a index
router.get('/', ProdutosController.show)
router.get('/produto/detalhe/:id',ProdutosController.detalheProduto);
router.get('/cadastro', ProdutosController.cadastroProduto);
router.get('/produtos', ProdutosController.listaDeProdutos);
router.get('/produto/carrinho',  ProdutosController.carinhoProduto);
router.get('/buscar',ProdutosController.buscarProdutos)


//parts
router.get('/edit/header', editParts.editHome)
router.get('/edit/footer', editParts.editFooter)


//rotas administrativas
router.get('/adm/produtos', AdmController.mostrarProdutos) // mostrar todos os produtos
router.get('/adm/produtos/crate', AdmController.criarProduto) // mostrar forms para adicionar o produto
router.get('/adm/produtos/:id/edit', AdmController.editarProdutos) // mostrar forms para editar/alterar o produto
router.post('/adm/produtos/store', AdmController.gravarProdutos) // recebe info difitada para criação de um novo produto
router.post('/adm/produtos/update', ()=>{}) // recebe indo digitada para editar o produto 
router.post('/adm/produtos/delete', ()=>{}) // recene id da pizza para deletar



module.exports = router;
