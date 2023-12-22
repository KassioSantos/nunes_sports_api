class ProdutoValidationMiddleware {
    cadastroValidation(req, res, next) {
        var produto = req.body
        var erros = {}


        if (!codigoValido(produto.codigo)) {
            erros.codigo = "O código é composto de até 4 números!"
        }

        if (!nomeValido(produto.nome)) {
            erros.nome = "O nome é composto por no mínimo 5 caracteres!"
        }

        if (!precoValido(produto.preco)) {
            erros.preco = "O valor do produto deve ser maior que 0!"
        }

        if (!descricaoValida(produto.descricao)) {
            erros.descricao = 'A descrição é composta por no mínimo 5 caracteres!'
        }

        if (Object.keys(erros).length === 0) {
            next()
        } else {
            res.status(400).json(erros)
        }
    }
}
module.exports = new ProdutoValidationMiddleware()

function codigoValido(codigo) {
    if (codigo === undefined) {
        return false
    }
    // Verifica se a string tem exatamente 4 caracteres
    if (codigo.length !== 4) {
        return false;
    }

    // Verifica se todos os caracteres são números
    for (let i = 0; i < codigo.length; i++) {
        if (isNaN(parseInt(codigo[i]))) {
            return false;
        }
    }

    // Se passou pelas verificações acima, a string é válida
    return true;
}

function nomeValido(nome) {
    if (nome === undefined) {
        return false
    }
    // Verifica se o nome não está vazio e tem mais de 5 caracteres
    if (nome && nome.trim().length > 5) {
        return true; // Retorna true se o nome for válido
    } else {
        return false; // Retorna false se o nome não for válido
    }
}

function precoValido(preco) {
    if (preco === undefined) {
        return false
    }
    // Verifica se o preço é um número e se é maior que zero
    if (!isNaN(preco) && parseFloat(preco) > 0) {
        return true; // Retorna true se o preço for válido
    } else {
        return false; // Retorna false se o preço não for válido
    }
}

function descricaoValida(descricao) {
    if (descricao === undefined) {
        return false
    }
    // Verifica se o nome não está vazio e tem mais de 5 caracteres
    if (descricao && descricao.trim().length > 5) {
        return true; // Retorna true se o nome for válido
    } else {
        return false; // Retorna false se o nome não for válido
    }
}