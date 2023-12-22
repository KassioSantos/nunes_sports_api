var express = require('express')
var router = express.Router()
const ProdutoController = require('../controller/ProdutoController')
const ProdutoValidationMiddleware = require('../middlewares/ProdutoValidationMiddleware')


router.post('/produto', ProdutoValidationMiddleware.cadastroValidation, ProdutoController.cadastrarNovoProduto)
router.get('/produtos', ProdutoController.buscarProdutosCadastrados)
router.delete('/produto/:codigo', ProdutoController.apagarProdutoPorCodigo)
router.put('/produto', ProdutoValidationMiddleware.cadastroValidation, ProdutoController.editarProdutoPorCodigo)
module.exports = router