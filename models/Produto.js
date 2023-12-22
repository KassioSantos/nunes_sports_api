const knex = require('../database/connection')

class Produto {
    async novoProduto(produto) {
        try {
            await knex.insert(produto).table('produto')
            console.log(`Produto cadastrado no Banco com sucesso`);
            return true
        } catch (error) {
            console.log(`Houve um erro ao cadastrar o produto no Banco: ${error}`);
            return error
        }
    }
    async buscaProdutoPorCodigo(codigo) {
        try {
            var resposta = await knex.select('*').from('produto').where({ codigo: codigo })
            if (resposta.length > 0) {
                return resposta[0]
            } else {
                return undefined
            }
        } catch (error) {
            console.log(error);
        }
    }

    async buscaTodosProdutos() {
        try {
            var resposta = await knex.select('*').from('produto')
            return resposta
        } catch (error) {
            console.log(error);
        }
    }
    async apagaLivroPorIsbn(codigo) {
        try {
            await knex.delete().where({ codigo: codigo }).table('produto')
            return true
        } catch (error) {
            console.log(`Erro ao tentar deletar dados no Banco de Dados - Motivo: ${error}`)
            return false
        }
    }

    async editaProdutoPorCodigo(produto) {
        try {
            let res = await knex.update({ nome: produto.nome, preco: produto.preco, descricao: produto.descricao }).where({ codigo: produto.codigo }).table('produto')
            if (res <= 0) {
                return { status: false, info: 'Não foi encontrado esse livro em nosso banco' }
            }
            return { status: true, info: 'Livro alterado com sucesso!' }
        } catch (error) {
            console.log(error);
            return { status: false, info: error }
        }
    }
}
module.exports = new Produto()
