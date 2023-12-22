const Produto = require('../models/Produto')

class ProdutoController {
    async cadastrarNovoProduto(req, res) {
        var produto = req.body
        var erros = {}

        var resB = await Produto.buscaProdutoPorCodigo(produto.codigo)
        if (resB !== undefined) {
            erros.codigo = "Este código já está cadastrado no sistema!"
            res.status(400).json(erros)
            return
        }

        await Produto.novoProduto(produto)

        res.status(200)
        return
    }

    async buscarProdutosCadastrados(req, res) {
        var produtos = await Produto.buscaTodosProdutos()

        res.status(200).json(produtos)
        return
    }

    async apagarProdutoPorCodigo(req, res) {
        var codigo = req.params.codigo
        await Produto.apagaLivroPorIsbn(codigo)

        res.status(200).json({ status: true })
        return
    }

    async editarProdutoPorCodigo(req, res) {
        var produto = req.body
        await Produto.editaProdutoPorCodigo(produto)
        res.status(200).json('ok')
        return
    }
}
module.exports = new ProdutoController()

