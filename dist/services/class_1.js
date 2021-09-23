"use strict";
var Lojinha = /** @class */ (function () {
    function Lojinha(_produto, _preco, _quantidade) {
        this._produto = _produto;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Lojinha.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (produto === '') {
                throw new Error("Nome inválido !");
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lojinha.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco <= 0) {
                throw new Error("Preço inválido !");
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lojinha.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade <= 0) {
                throw new Error("Quantidade inválida !");
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Lojinha.prototype.valor = function () {
        return this.preco * this.quantidade;
    };
    Lojinha.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade > 10 && this.quantidade <= 20) {
            return this.valor() * 0.1;
        }
        else if (this.quantidade > 20 && this.quantidade <= 50) {
            return this.valor() * 0.2;
        }
        else {
            return this.valor() * 0.25;
        }
    };
    Lojinha.prototype.total = function () {
        return this.valor() - this.desconto();
    };
    return Lojinha;
}());
var cliente = new Lojinha('Notebook', 2000, 15);
try {
    cliente.produto = 'Xbox';
    cliente.preco = 100;
    cliente.quantidade = 20;
    console.log("O produto " + cliente.produto + " de " + cliente.preco + " reais, quantidade comprada de " + cliente.quantidade + " teve o desconto de " + cliente.desconto() + " reais e o valor pago foi de " + cliente.total() + " reais.");
}
catch (err) {
    console.log(err.message);
}
